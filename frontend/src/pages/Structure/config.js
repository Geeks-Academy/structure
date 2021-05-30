const CONFIG = {
  maxDepth: 100,
  levelSeparation: 30,
  siblingSeparation: 30,
  subTeeSeparation: 30,

  padding: 15,

  connectors: {
    type: 'step',
    style: {
      stroke: 'black',
    },
    stackIndent: 15,
  },

  node: {
    HTMLclass: 'nodeExample1',
  },
  container: '#basic-example',
  containerId: 'basic-example',
  nodeHTMLclass: 'node',
};

export default CONFIG;
