import TreeStore from './TreeStore';
import JSONconfig from './JSONconfig';

class Treant {
  constructor(jsonConfig: any) {
    if (Array.isArray(jsonConfig)) {
      jsonConfig = JSONconfig.make(jsonConfig.filter(Boolean));
    }

    const newTree = TreeStore.createTree(jsonConfig);
    newTree.positionTree();
  }
}

export default Treant;
