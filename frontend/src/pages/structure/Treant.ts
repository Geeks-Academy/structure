import TreeStore from './TreeStore'
import JSONconfig from './JSONconfig'

class Treant {
	constructor(jsonConfig: any){
		if (jsonConfig instanceof Array) {
			jsonConfig = JSONconfig.make(jsonConfig);
		}
		
		const newTree = TreeStore.createTree(jsonConfig);
		newTree.positionTree();
	}
}

export default Treant