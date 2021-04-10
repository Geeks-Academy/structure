import Tree from './Tree'

class TreeStore {
	static store: Array<Tree> = [];

	static createTree(jsonConfig: any): Tree {
		this.store.push(new Tree(jsonConfig, this.store.length));
		return this.store[this.store.length - 1];
	}

	static get(treeId: number): Tree {
		return this.store[treeId];
	}

};

export default TreeStore