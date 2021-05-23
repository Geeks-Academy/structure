const JSONconfig = {
  jsonStructure: {
    nodeStructure: {
      children: [],
    },
  },
  make(configArray: any): any {
    this.jsonStructure = {
      nodeStructure: {
        children: [],
      },
    };
    //fist loop: find config, find root;
    let i = configArray.length;
    while (i--) {
      const node = configArray[i];
      if (node.hasOwnProperty('container')) {
        continue;
      }

      if (!node.hasOwnProperty('parent') && !node.hasOwnProperty('container')) {
        this.jsonStructure.nodeStructure = node;
        node.myID = this.getID();
      }
    }

    this.findChildren(configArray);
    this.jsonStructure.nodeStructure.children = this.jsonStructure.nodeStructure.children.filter(
      (child: any) => child.children
    );
    return this.jsonStructure;
  },

  findChildren(nodes: any) {
    const parents = [0];

    while (parents.length) {
      const parentId = parents.pop() || 0;
      const parent = this.findNode(this.jsonStructure.nodeStructure, parentId);
      const children: any = [];

      nodes.forEach((node: any) => {
        if (node.parent?.myID === parentId) {
          node.myID = this.getID();
          delete node.parent;
          children.push(node);
          parents.push(node.myID);
        }
      });

      if (children.length) {
        parent.children = children;
      }
    }
  },

  findNode(node: any, nodeId: number): any {
    if (node.myID === nodeId) {
      return node;
    } else if (node.children) {
      let childrenLen = node.children.length;
      while (childrenLen--) {
        const found = this.findNode(node.children[childrenLen], nodeId);
        if (found) {
          return found;
        }
      }
    }
  },

  getID: (function () {
    let i = 0;
    return () => i++;
  })(),
};

export default JSONconfig;
