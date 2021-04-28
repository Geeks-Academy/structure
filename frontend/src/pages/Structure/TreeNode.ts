import TreeStore from './TreeStore';
import Util from './Util';

class TreeNode {
  static CONFIG = {
    nodeHTMLclass: 'node',

    textClass: {
      name: 'node-name',
      title: 'node-title',
      desc: 'node-desc',
      contact: 'node-contact',
      status: 'node-status',
    },
  };
  id: any;
  parentId: any;
  treeId: any;
  prelim: number;
  modifier: number;
  stackParentId: any;
  image: any;
  link: {};
  connStyle: {};
  drawLineThrough: any;
  collapsable: any;
  collapsed: any;
  text: any;
  member: any;
  nodeInnerHTML: any;
  nodeHTMLclass: string;
  nodeHTMLid: any;
  width: any;
  children: any;
  leftNeighborId: any;
  rightNeighborId: any;
  X: any;
  Y: any;
  height: any;
  nodeDOM: any;

  constructor(nodeStructure: any, id: any, parentId: any, tree: any, stackParentId: any) {
    this.id = id;
    this.parentId = parentId;
    this.treeId = tree.id;
    this.prelim = 0;
    this.modifier = 0;

    this.stackParentId = stackParentId;

    this.image = nodeStructure.image;

    this.link = Util.createMerge(tree.CONFIG.node.link, nodeStructure.link);

    this.connStyle = Util.createMerge(tree.CONFIG.connectors, nodeStructure.connectors);

    this.drawLineThrough =
      nodeStructure.drawLineThrough === false
        ? false
        : nodeStructure.drawLineThrough || tree.CONFIG.node.drawLineThrough;

    this.collapsable =
      nodeStructure.collapsable === false
        ? false
        : nodeStructure.collapsable || tree.CONFIG.node.collapsable;
    this.collapsed = nodeStructure.collapsed;

    this.text = nodeStructure.text;
    this.member = nodeStructure;

    // '.node' DIV
    this.nodeInnerHTML = nodeStructure.innerHTML;
    this.nodeHTMLclass =
      (tree.CONFIG.node.HTMLclass ? tree.CONFIG.node.HTMLclass : '') + // globaly defined class for the nodex
      (nodeStructure.HTMLclass ? ' ' + nodeStructure.HTMLclass : ''); // + specific node class

    this.nodeHTMLid = nodeStructure.HTMLid;
  }

  Tree(): any {
    return TreeStore.get(this.treeId);
  }

  dbGet(nodeId: any): any {
    return this.Tree().nodeDB.get(nodeId);
  }

  size(): any {
    return this.width;
  }

  childrenCount(): any {
    return !this.children ? 0 : this.children.length;
  }

  childAt(i: any): any {
    return this.dbGet(this.children[i]);
  }

  firstChild(): any {
    return this.childAt(0);
  }

  lastChild(): any {
    return this.childAt(this.children.length - 1);
  }

  parent(): any {
    return this.dbGet(this.parentId);
  }

  leftNeighbor(): any {
    if (this.leftNeighborId) {
      return this.dbGet(this.leftNeighborId);
    }
  }

  rightNeighbor(): any {
    if (this.rightNeighborId) {
      return this.dbGet(this.rightNeighborId);
    }
  }

  leftSibling(): any {
    const leftNeighbor = this.leftNeighbor();
    if (leftNeighbor?.parentId === this.parentId) {
      return leftNeighbor;
    }
  }

  rightSibling(): any {
    const rightNeighbor = this.rightNeighbor();
    if (rightNeighbor?.parentId === this.parentId) {
      return rightNeighbor;
    }
  }

  childrenCenter(): any {
    const first = this.firstChild();
    const last = this.lastChild();
    return first.prelim + (last.prelim - first.prelim + last.size()) / 2;
  }

  leftMost(level: any, depth: any): any {
    if (level >= depth) return this;
    if (this.childrenCount() === 0) return;
  }

  connectorPoint(startPoint: any): any {
    let orient = this.Tree().CONFIG.rootOrientation;
    const point: { x: any; y: any } = { x: null, y: null };
    if (this.stackParentId) {
      if (orient === 'NORTH') {
        orient = 'WEST';
      }
    }
    if (orient === 'NORTH') {
      point.x = this.X + this.width / 2;
      point.y = startPoint ? this.Y + this.height : this.Y;
    } else if (orient === 'WEST') {
      point.x = startPoint ? this.X + this.width : this.X;
      point.y = this.Y + this.height / 2;
    }
    return point;
  }

  createGeometry(tree: any): any {
    const drawArea = tree.drawArea;
    let image;

    /////////// CREATE NODE //////////////
    let node = document.createElement('div');

    node.className = TreeNode.CONFIG.nodeHTMLclass;
    if (this.nodeHTMLclass) node.className += ' ' + this.nodeHTMLclass;

    if (this.nodeHTMLid) node.id = this.nodeHTMLid;

    // IMAGE
    if (this.image) {
      const container = document.createElement('div');
      container.className = this.member.manager ? 'manager-avatar' : 'avatar';
      image = document.createElement('img');
      image.src = this.image;
      container.appendChild(image);
      node.appendChild(container);
    }

    // TEXT
    // TODO Refactor
    const container = document.createElement('div');
    container.className = 'content';

    if (this.member.name) {
      const text = document.createElement('p');
      text.className = TreeNode.CONFIG.textClass.name;
      text.appendChild(document.createTextNode(this.member.name));
      container.appendChild(text);
    }
    if (this.member.title) {
      const text = document.createElement('p');
      text.className = TreeNode.CONFIG.textClass.title;
      text.appendChild(document.createTextNode(this.member.title));
      container.appendChild(text);
    }
    if (this.member.openToWork) {
      const status = document.createElement('div');
      status.className = TreeNode.CONFIG.textClass.status;
      const statusText = document.createElement('p');
      statusText.innerText = 'Open to work';
      status.innerHTML = `<img src="./assets/Check.svg" />`;
      container.appendChild(status);
      status.appendChild(statusText);
    }
    if (this.member.socials) {
      const socials = document.createElement('div');
      socials.className = 'socials';
      for (const key in this.member.socials) {
        const social = document.createElement('div');
        social.className = 'social';
        if (key === 'email') {
          social.innerHTML = `<a href="mailto:${this.member.socials[key]}"><img src="./assets/${key}.png" /></a>`;
        } else {
          social.innerHTML = `<a href="${this.member.socials[key]}"><img src="./assets/${key}.png" /></a>`;
        }
        socials.appendChild(social);
      }
      container.appendChild(socials);
    }
    if (this.member.active) {
      node.classList.add('active-member');
    } else {
      node.classList.add('inactive-member');
    }

    node.appendChild(container);

    /////////// APPEND all //////////////
    drawArea.appendChild(node);

    this.width = node.offsetWidth;
    this.height = node.offsetHeight;

    this.nodeDOM = node;

    tree.imageLoader.processNode(this);
  }
}

export default TreeNode;
