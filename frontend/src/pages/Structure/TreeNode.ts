import TreeStore from './TreeStore';
import CONFIG from './config';
import memberCreator from './memberCreator';

interface IPoint {
  x: number;
  y: number;
}

class TreeNode {
  id: number;
  parentId: number;
  prelim: number;
  stackParentId: number | null;
  image: any;
  connStyle: {};
  member: any;
  nodeHTMLclass: string;
  width: any;
  children: any;
  leftNeighborId: any;
  rightNeighborId: any;
  X: any;
  Y: any;
  height: any;
  nodeDOM: any;

  constructor(nodeStructure: any, id: number, parentId: number, stackParentId: number | null) {
    this.id = id;
    this.parentId = parentId;
    this.prelim = 0;
    this.stackParentId = stackParentId;
    this.connStyle = CONFIG.connectors;
    this.member = nodeStructure;
    this.nodeHTMLclass = CONFIG.node.HTMLclass || '';
  }

  dbGet(nodeId: number): TreeNode | undefined {
    return TreeStore.get(0).nodeDB.get(nodeId);
  }

  size(): number {
    return this.width;
  }

  childrenCount(): number {
    return !this.children ? 0 : this.children.length;
  }

  childAt(i: any): TreeNode | undefined {
    return this.dbGet(this.children[i]);
  }

  firstChild(): TreeNode | undefined {
    return this.childAt(0);
  }

  lastChild(): TreeNode | undefined {
    return this.childAt(this.children.length - 1);
  }

  parent(): TreeNode | undefined {
    return this.dbGet(this.parentId);
  }

  leftNeighbor(): TreeNode | undefined {
    if (this.leftNeighborId) {
      return this.dbGet(this.leftNeighborId);
    }
  }

  rightNeighbor(): TreeNode | undefined {
    if (this.rightNeighborId) {
      return this.dbGet(this.rightNeighborId);
    }
  }

  leftSibling(): TreeNode | undefined {
    const leftNeighbor = this.leftNeighbor();
    if (leftNeighbor?.parentId === this.parentId) {
      return leftNeighbor;
    }
  }

  rightSibling(): TreeNode | undefined {
    const rightNeighbor = this.rightNeighbor();
    if (rightNeighbor?.parentId === this.parentId) {
      return rightNeighbor;
    }
  }

  childrenCenter(): number | undefined {
    const first = this.firstChild();
    const last = this.lastChild();
    if (!first || !last) return;
    return first.prelim + (last.prelim - first.prelim + last.size()) / 2;
  }

  leftMost(level: number, depth: number): any {
    if (level >= depth) return this;
    if (this.childrenCount() === 0) return;
  }

  connectorPoint(startPoint: boolean): IPoint {
    let orient = 'NORTH';
    if (this.stackParentId) {
      if (orient === 'NORTH') {
        orient = 'WEST';
      }
    }
    const point: IPoint = { x: 0, y: 0 };
    if (orient === 'NORTH') {
      point.x = this.X + this.width / 2;
      point.y = startPoint ? this.Y + this.height : this.Y;
    } else if (orient === 'WEST') {
      point.x = startPoint ? this.X + this.width : this.X;
      point.y = this.Y + this.height / 2;
    }
    return point;
  }

  createGeometry(tree: any) {
    const node = memberCreator(this.member);
    tree.drawArea.appendChild(node);
    this.width = node.offsetWidth;
    this.height = node.offsetHeight;
    this.nodeDOM = node;
  }
}

export default TreeNode;
