import ImageLoader from './ImageLoader';
import NodeDB from './NodeDB';
import Util from './Util';

declare global {
  interface Window {
    Raphael: any;
  }
}

class Tree {
  static CONFIG = {
    maxDepth: 100,
    rootOrientation: 'NORTH',
    nodeAlign: 'CENTER',
    levelSeparation: 30,
    siblingSeparation: 30,
    subTeeSeparation: 30,

    hideRootNode: false,

    animateOnInit: false,
    animateOnInitDelay: 500,

    padding: 15,
    scrollbar: 'native',

    connectors: {
      type: 'step',
      style: {
        stroke: 'black',
      },
      stackIndent: 15,
    },

    node: {
      link: {
        target: '_self',
      },
    },

    animation: {
      nodeSpeed: 450,
      nodeAnimation: 'linear',
      connectorsSpeed: 450,
      connectorsAnimation: 'linear',
    },
  };

  id: number;
  imageLoader: ImageLoader;
  CONFIG: any;
  drawArea: HTMLElement | null;
  nodeDB: NodeDB;
  connectionStore: any;
  loaded: any;
  levelMaxDim: any;
  _R: any;
  lastNodeOnLevel: any;

  constructor(jsonConfig: any, treeId: number) {
    this.id = treeId;
    this.imageLoader = new ImageLoader();
    this.CONFIG = Util.createMerge(Tree.CONFIG, jsonConfig.chart);
    this.drawArea = document.getElementById(this.CONFIG.container.substring(1));
    this.drawArea!.classList.add('Treant');
    this.nodeDB = new NodeDB(jsonConfig.nodeStructure, this);
    this.connectionStore = {};
  }

  positionTree(callback?: () => void) {
    const self = this;

    if (this.imageLoader.isNotLoading()) {
      const root = this.root();

      this.resetLevelData();
      this.firstWalk(root, 0);
      this.secondWalk(root, 0, 0, 0);
      this.positionNodes();
      if (!this.loaded) {
        this.drawArea!.classList.add('Treant-loaded');
        this.loaded = true;
      }
    } else {
      setTimeout(() => {
        self.positionTree(callback);
      }, 10);
    }
  }

  firstWalk(node: any, level: number) {
    node.prelim = null;
    node.modifier = null;

    this.setNeighbors(node, level);
    this.calcLevelDim(node, level);

    const leftSibling = node.leftSibling();

    if (node.childrenCount() === 0 || level === this.CONFIG.maxDepth) {
      if (leftSibling) {
        node.prelim = leftSibling.prelim + leftSibling.size() + this.CONFIG.siblingSeparation;
      } else {
        node.prelim = 0;
      }
    } else {
      for (let i = 0; i < node.childrenCount(); i++) {
        this.firstWalk(node.childAt(i), level + 1);
      }

      const midPoint = node.childrenCenter() - node.size() / 2;

      if (leftSibling) {
        node.prelim = leftSibling.prelim + leftSibling.size() + this.CONFIG.siblingSeparation;
        node.modifier = node.prelim - midPoint;
        this.apportion(node, level);
      } else {
        node.prelim = midPoint;
      }
      if (node.stackParent) {
        node.modifier +=
          this.nodeDB.get(node.stackChildren[0]).size() / 2 + node.connStyle.stackIndent;
      } else if (node.stackParentId) {
        node.prelim = 0;
      }
    }
  }

  apportion(node: any, level: number) {
    let firstChild = node.firstChild();
    let firstChildLeftNeighbor = firstChild.leftNeighbor();
    let compareDepth = 1;
    const depthToStop = this.CONFIG.maxDepth - level;

    while (firstChild && firstChildLeftNeighbor && compareDepth <= depthToStop) {
      let modifierSumRight = 0;
      let modifierSumLeft = 0;
      let leftAncestor = firstChildLeftNeighbor;
      let rightAncestor = firstChild;

      for (let i = 0; i < compareDepth; i++) {
        leftAncestor = leftAncestor.parent();
        rightAncestor = rightAncestor.parent();
        modifierSumLeft += leftAncestor.modifier;
        modifierSumRight += rightAncestor.modifier;
        if (rightAncestor.stackParent !== undefined) {
          modifierSumRight += rightAncestor.size() / 2;
        }
      }

      let totalGap =
        firstChildLeftNeighbor.prelim +
        modifierSumLeft +
        firstChildLeftNeighbor.size() +
        this.CONFIG.subTeeSeparation -
        (firstChild.prelim + modifierSumRight);

      if (totalGap > 0) {
        let subtreeAux = node;
        let numSubtrees = 0;

        // count all the subtrees in the LeftSibling
        while (subtreeAux && subtreeAux.id !== leftAncestor.id) {
          subtreeAux = subtreeAux.leftSibling();
          numSubtrees++;
        }

        if (subtreeAux) {
          let subtreeMoveAux = node;
          let singleGap = totalGap / numSubtrees;

          while (subtreeMoveAux.id !== leftAncestor.id) {
            subtreeMoveAux.prelim += totalGap;
            subtreeMoveAux.modifier += totalGap;
            totalGap -= singleGap;
            subtreeMoveAux = subtreeMoveAux.leftSibling();
          }
        }
      }

      compareDepth++;

      if (firstChild.childrenCount() === 0) {
        firstChild = node.leftMost(0, compareDepth);
      } else {
        firstChild = firstChild.firstChild();
      }
      if (firstChild) {
        firstChildLeftNeighbor = firstChild.leftNeighbor();
      }
    }
  }

  secondWalk(node: any, level: number, X: number, Y: number) {
    if (level <= this.CONFIG.maxDepth) {
      const levelHeight = this.levelMaxDim[level].height;
      const nodesizeTmp = node.height;

      node.X = node.prelim + X;

      node.Y = Y + (levelHeight - nodesizeTmp) / 2;
      if (node.childrenCount() !== 0) {
        this.secondWalk(
          node.firstChild(),
          level + 1,
          X + node.modifier,
          Y + levelHeight + this.CONFIG.levelSeparation
        );
      }
      if (node.rightSibling()) {
        this.secondWalk(node.rightSibling(), level, X, Y);
      }
    }
  }

  positionNodes() {
    const self = this;
    const treeSize = {
      x: self.nodeDB.getMinMaxCoord('X', null, null),
      y: self.nodeDB.getMinMaxCoord('Y', null, null),
    };

    const treeWidth = treeSize.x.max - treeSize.x.min;
    const treeHeight = treeSize.y.max - treeSize.y.min;

    const treeCenter = {
      x: treeSize.x.max - treeWidth / 2,
      y: treeSize.y.max - treeHeight / 2,
    };

    const containerCenter = {
      x: self.drawArea!.clientWidth / 2,
      y: self.drawArea!.clientHeight / 2,
    };

    const deltaX = containerCenter.x - treeCenter.x;
    const deltaY = containerCenter.y - treeCenter.y;

    // all nodes must have positive X or Y coordinates, handle this with offsets
    const negOffsetX = treeSize.x.min + deltaX <= 0 ? Math.abs(treeSize.x.min) : 0;
    const negOffsetY = treeSize.y.min + deltaY <= 0 ? Math.abs(treeSize.y.min) : 0;

    this.handleOverflow(treeWidth, treeHeight);

    // position all the nodes
    for (let i = 0; i < this.nodeDB.db.length; i++) {
      const node = this.nodeDB.get(i);

      node.X +=
        negOffsetX + (treeWidth < this.drawArea!.clientWidth ? deltaX : this.CONFIG.padding);
      node.Y +=
        negOffsetY + (treeHeight < this.drawArea!.clientHeight ? deltaY : this.CONFIG.padding);

      node.nodeDOM.style.left = `${node.X}px`;
      node.nodeDOM.style.top = `${node.Y}px`;
      node.positioned = true;

      if (node.id !== 0) {
        this.setConnectionToParent(node);
      }
    }
  }

  handleOverflow(treeWidth: number, treeHeight: number) {
    const viewWidth =
      treeWidth < this.drawArea!.clientWidth
        ? this.drawArea!.clientWidth
        : treeWidth + this.CONFIG.padding * 2;
    const viewHeight =
      treeHeight < this.drawArea!.clientHeight
        ? this.drawArea!.clientHeight
        : treeHeight + this.CONFIG.padding * 2;
    if (this._R) {
      this._R.setSize(viewWidth, viewHeight);
    } else {
      this._R = window.Raphael(this.drawArea, viewWidth, viewHeight);
    }

    if (this.drawArea!.clientWidth < treeWidth) {
      // is owerflow-x necessary
      this.drawArea!.style.overflowX = 'auto';
    }

    if (this.drawArea!.clientHeight < treeHeight) {
      // is owerflow-y necessary
      this.drawArea!.style.overflowY = 'auto';
    }
  }

  setConnectionToParent(node: any) {
    const stacked = node.stackParentId;

    const parent = stacked ? this.nodeDB.get(stacked) : node.parent();

    const pathString = this.getPathString(parent, node, stacked);

    const connLine = this._R.path(pathString);
    this.connectionStore[node.id] = connLine;

    connLine.attr(parent.connStyle.style);
  }

  getPathString(fromNode: any, toNode: any, stacked: boolean): string {
    const startPoint = fromNode.connectorPoint(true);
    const endPoint = toNode.connectorPoint(false);
    const P1 = {
      x: startPoint.x,
      y: (startPoint.y + endPoint.y) / 2,
    };
    const P2 = {
      x: endPoint.x,
      y: (startPoint.y + endPoint.y) / 2,
    };

    // sp, p1, pm, p2, ep == "x,y"
    const sp = `${startPoint.x},${startPoint.y}`;
    const p1 = `${P1.x},${P1.y}`;
    const p2 = `${P2.x},${P2.y}`;
    const ep = `${endPoint.x},${endPoint.y}`;
    let pathString;
    if (stacked) {
      const stackPoint = `${startPoint.x},${endPoint.y}`;
      pathString = ['M', sp, 'L', stackPoint, 'L', ep];
    } else {
      pathString = ['M', sp, 'L', p1, 'L', p2, 'L', ep];
    }

    return pathString.join(' ');
  }

  setNeighbors(node: any, level: number) {
    node.leftNeighborId = this.lastNodeOnLevel[level];
    if (node.leftNeighborId) {
      node.leftNeighbor().rightNeighborId = node.id;
    }
    this.lastNodeOnLevel[level] = node.id;
  }

  calcLevelDim(node: any, level: number) {
    if (this.levelMaxDim[level]) {
      if (this.levelMaxDim[level].width < node.width) {
        this.levelMaxDim[level].width = node.width;
      }

      if (this.levelMaxDim[level].height < node.height) {
        this.levelMaxDim[level].height = node.height;
      }
    } else {
      this.levelMaxDim[level] = { width: node.width, height: node.height };
    }
  }

  resetLevelData() {
    this.lastNodeOnLevel = [];
    this.levelMaxDim = [];
  }

  root() {
    return this.nodeDB.get(0);
  }
}

export default Tree;
