import TreeNode from './TreeNode';

class NodeDB {
  db: any;
  constructor(nodeStructure: any, tree: any) {
    this.db = [];

    const self = this;

    function itterateChildren(node: any, parentId: any) {
      let newNode = self.createNode(node, parentId, null);
      if (node.children) {
        newNode.children = [];
        const stack = !self.hasGrandChildren(node) ? newNode.id : null;
        // svildren are position on separate leves, one beneeth the other
        if (stack !== null) {
          newNode.stackChildren = [];
        }
        node.children.forEach((n: any, i: any, array: any) => {
          if (stack !== null) {
            newNode = self.createNode(n, newNode.id, stack);
            if (i + 1 < array.length) newNode.children = [];
          } else {
            itterateChildren(n, newNode.id);
          }
        });
      }
    }

    itterateChildren(nodeStructure, -1);

    this.createGeometries(tree);
  }

  createGeometries(tree: any) {
    let i = this.db.length;
    while (i--) {
      this.get(i).createGeometry(tree);
    }
  }

  get(nodeId: any): any {
    return this.db[nodeId];
  }

  createNode(nodeStructure: any, parentId: any, stackParentId: any): any {
    const node = new TreeNode(nodeStructure, this.db.length, parentId, stackParentId);

    this.db.push(node);
    if (parentId >= 0) {
      this.get(parentId).children.push(node.id);
    }

    if (stackParentId) {
      this.get(stackParentId).stackParent = true;
      this.get(stackParentId).stackChildren.push(node.id);
    }

    return node;
  }

  getMinMaxCoord(dim: any, parent: any, MinMax: any): any {
    parent = parent || this.get(0);
    let i = parent.childrenCount();
    MinMax = MinMax || {
      min: parent[dim],
      max: parent[dim] + (dim === 'X' ? parent.width : parent.height),
    };

    while (i--) {
      const node = parent.childAt(i);
      const maxTest = node[dim] + (dim === 'X' ? node.width : node.height);
      const minTest = node[dim];

      if (maxTest > MinMax.max) {
        MinMax.max = maxTest;
      }
      if (minTest < MinMax.min) {
        MinMax.min = minTest;
      }

      this.getMinMaxCoord(dim, node, MinMax);
    }
    return MinMax;
  }

  hasGrandChildren(nodeStructure: any): any {
    let i = nodeStructure.children.length;
    while (i--) {
      if (nodeStructure.children[i].children) {
        return true;
      }
    }
  }
}

export default NodeDB;
