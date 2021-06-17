import Tree from './Tree';

class TreeStore {
  static store: Array<Tree> = [];

  static createTree(jsonConfig: any): Tree {
    this.store.push(new Tree(jsonConfig));
    return this.store[0];
  }

  static get(): Tree {
    return this.store[0];
  }
}

export default TreeStore;
