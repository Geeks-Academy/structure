/*
* Treant-js
*
* (c) 2013 Fran Peručić
* Treant-js may be freely distributed under the MIT license.
* For all details and documentation:
* http://fperucic.github.io/treant-js
*
* Treant is an open-source JavaScipt library for visualization of tree diagrams.
* It implements the node positioning algorithm of John Q. Walker II "Positioning nodes for General Trees".
*
* References:
* Emilio Cortegoso Lobato: ECOTree.js v1.0 (October 26th, 2006)
*
*/
  
class UTIL {
	static inheritAttrs(me, from) {
		for (const attr in from) {
			if(typeof from[attr] !== 'function') {
				if(me[attr] instanceof Object && from[attr] instanceof Object) {
					this.inheritAttrs(me[attr], from[attr]);
				} else {
					me[attr] = from[attr];
				}
			}
		}
	}

	static createMerge(obj1, obj2) {
		const newObj = {};
		if(obj1) this.inheritAttrs(newObj, this.cloneObj(obj1));
		if(obj2) this.inheritAttrs(newObj, obj2);
		return newObj;
	}

	static cloneObj(obj) {
		if (Object(obj) !== obj) {
			return obj;
		}
		const res = new obj.constructor();
		for (const key in obj) if (obj["hasOwnProperty"](key)) {
			res[key] = this.cloneObj(obj[key]);
		}
		return res;
	}

	static addEvent(el, eventType, handler) {
		el.addEventListener(eventType, handler, false);
	}

};

class ImageLoader {
	
	constructor(){
		this.loading = []
	}

	processNode(node) {
		const images = node.nodeDOM.getElementsByTagName('img')
		let i =	images.length;
		while(i--) {
			this.create(node, images[i]);
		}
	}

	removeAll(img_src) {
		let i = this.loading.length;
		while (i--) {
			if (this.loading[i] === img_src) { 
				this.loading.splice(i,1); 
			}
		}
	}

	create(node, image) {
		const self = this
		const source = image.src;
		this.loading.push(source);

		function imgTrigger() {
			self.removeAll(source);
			node.width = node.nodeDOM.offsetWidth;
			node.height = node.nodeDOM.offsetHeight;
		}

		if (image.complete) { 
			return imgTrigger(); 
		}

		UTIL.addEvent(image, 'load', imgTrigger);
		UTIL.addEvent(image, 'error', imgTrigger);
	}

	isNotLoading() {
		return this.loading.length === 0;
	}
}

class TreeStore {
	static store = [];

	static createTree(jsonConfig) {
		this.store.push(new Tree(jsonConfig, this.store.length));
		return this.store[this.store.length - 1];
	}

	static get(treeId) {
		return this.store[treeId];
	}

};

class Tree {

	constructor(jsonConfig, treeId) {
		this.id = treeId
		this.imageLoader = new ImageLoader()
		this.CONFIG = UTIL.createMerge(Tree.CONFIG, jsonConfig.chart);
		this.drawArea = document.getElementById(this.CONFIG.container.substring(1));
		this.drawArea.classList.add("Treant");
		this.nodeDB = new NodeDB(jsonConfig.nodeStructure, this);
		this.connectionStore = {};
	}

	positionTree(callback) {
		const self = this;

		if (this.imageLoader.isNotLoading()) {

			const root = this.root()
			
			this.resetLevelData();
			this.firstWalk(root, 0);
			this.secondWalk( root, 0, 0, 0 );
			this.positionNodes();
			if(!this.loaded) {
				this.drawArea.classList.add("Treant-loaded")
				this.loaded = true;
			}
		} else {
			setTimeout(() => { 
				self.positionTree(callback); 
			}, 10);
		}
	}

	firstWalk(node, level) {
		node.prelim = null; 
		node.modifier = null;

		this.setNeighbors(node, level);
		this.calcLevelDim(node, level);

		const leftSibling = node.leftSibling();

		if(node.childrenCount() === 0 || level === this.CONFIG.maxDepth) {
			if(leftSibling) {
				node.prelim = leftSibling.prelim + leftSibling.size() + this.CONFIG.siblingSeparation;
			} else {
				node.prelim = 0;
			}
		} else {

			for(let i = 0; i < node.childrenCount(); i++) {
				this.firstWalk(node.childAt(i), level + 1);
			}

			const midPoint = node.childrenCenter() - node.size() / 2;

			if(leftSibling) {
				node.prelim		= leftSibling.prelim + leftSibling.size() + this.CONFIG.siblingSeparation;
				node.modifier	= node.prelim - midPoint;
				this.apportion( node, level );
			} else {
				node.prelim = midPoint;
			}
			if(node.stackParent) { 
				node.modifier += this.nodeDB.get( node.stackChildren[0] ).size()/2 + node.connStyle.stackIndent;
			} else if ( node.stackParentId ) { 
				node.prelim = 0;
			}
		}
	}

	apportion(node, level) {
		let firstChild = node.firstChild()
		let firstChildLeftNeighbor = firstChild.leftNeighbor()
		let compareDepth = 1
		const depthToStop = this.CONFIG.maxDepth - level;

		while( firstChild && firstChildLeftNeighbor && compareDepth <= depthToStop ) {

			let modifierSumRight = 0
			let modifierSumLeft = 0
			let leftAncestor = firstChildLeftNeighbor
			let rightAncestor = firstChild

			for(let i = 0; i < compareDepth; i++) {

				leftAncestor = leftAncestor.parent();
				rightAncestor = rightAncestor.parent();
				modifierSumLeft += leftAncestor.modifier;
				modifierSumRight += rightAncestor.modifier;
				if(rightAncestor.stackParent !== undefined) {
					modifierSumRight += rightAncestor.size()/2;
				}
			}

			let totalGap = (firstChildLeftNeighbor.prelim + modifierSumLeft + firstChildLeftNeighbor.size() + this.CONFIG.subTeeSeparation) - (firstChild.prelim + modifierSumRight );

			if(totalGap > 0) {

				let subtreeAux = node
				let numSubtrees = 0;

				// count all the subtrees in the LeftSibling
				while(subtreeAux && subtreeAux.id != leftAncestor.id) {
					subtreeAux = subtreeAux.leftSibling();
					numSubtrees++;
				}

				if(subtreeAux) {

					let subtreeMoveAux = node
					let singleGap = totalGap / numSubtrees;

					while(subtreeMoveAux.id != leftAncestor.id) {
						subtreeMoveAux.prelim += totalGap;
						subtreeMoveAux.modifier	+= totalGap;
						totalGap -= singleGap;
						subtreeMoveAux = subtreeMoveAux.leftSibling();
					}
				}
			}

			compareDepth++;

			if(firstChild.childrenCount() === 0){
				firstChild = node.leftMost(0, compareDepth);
			} else {
				firstChild = firstChild.firstChild();
			}
			if(firstChild) {
				firstChildLeftNeighbor = firstChild.leftNeighbor();
			}
		}
	}

	secondWalk(node, level, X, Y) {
		if(level <= this.CONFIG.maxDepth) {
			const levelHeight = this.levelMaxDim[level].height;
			const nodesizeTmp = node.height;

			node.X = node.prelim + X;

			node.Y = Y + (levelHeight - nodesizeTmp) / 2
			if(node.childrenCount() !== 0) {
				this.secondWalk(node.firstChild(), level + 1, X + node.modifier, Y + levelHeight + this.CONFIG.levelSeparation);
			}
			if(node.rightSibling()) {
				this.secondWalk(node.rightSibling(), level, X, Y);
			}
		}
	}

	positionNodes() {
		const self = this
		const treeSize = {
			x: self.nodeDB.getMinMaxCoord('X', null, null),
			y: self.nodeDB.getMinMaxCoord('Y', null, null)
		}

		const treeWidth = treeSize.x.max - treeSize.x.min
		const treeHeight = treeSize.y.max - treeSize.y.min

		const treeCenter = {
			x: treeSize.x.max - treeWidth/2,
			y: treeSize.y.max - treeHeight/2
		}

		const containerCenter = {
			x: self.drawArea.clientWidth/2,
			y: self.drawArea.clientHeight/2
		}

		const deltaX = containerCenter.x - treeCenter.x
		const deltaY = containerCenter.y - treeCenter.y

			// all nodes must have positive X or Y coordinates, handle this with offsets
		const negOffsetX = ((treeSize.x.min + deltaX) <= 0) ? Math.abs(treeSize.x.min) : 0
		const negOffsetY = ((treeSize.y.min + deltaY) <= 0) ? Math.abs(treeSize.y.min) : 0

		this.handleOverflow(treeWidth, treeHeight);

		// position all the nodes
		for(let i = 0; i < this.nodeDB.db.length; i++) {

			const node = this.nodeDB.get(i);

			node.X += negOffsetX + ((treeWidth < this.drawArea.clientWidth) ? deltaX : this.CONFIG.padding);
			node.Y += negOffsetY + ((treeHeight < this.drawArea.clientHeight) ? deltaY : this.CONFIG.padding);

			node.nodeDOM.style.left = `${node.X}px`;
			node.nodeDOM.style.top = `${node.Y}px`;
			node.positioned = true;

			if (node.id !== 0) {
				this.setConnectionToParent(node);
			}
		}

	}

	handleOverflow(treeWidth, treeHeight) {
		const viewWidth = (treeWidth < this.drawArea.clientWidth) 
			? this.drawArea.clientWidth 
			: treeWidth + this.CONFIG.padding * 2
		const viewHeight = (treeHeight < this.drawArea.clientHeight) 
			? this.drawArea.clientHeight 
			: treeHeight + this.CONFIG.padding * 2
		if(this._R) {
			this._R.setSize(viewWidth, viewHeight);
		} else {
			this._R = Raphael(this.drawArea, viewWidth, viewHeight);
		}    

		if(this.drawArea.clientWidth < treeWidth) { // is owerflow-x necessary
			this.drawArea.style.overflowX = "auto";
		}

		if(this.drawArea.clientHeight < treeHeight) { // is owerflow-y necessary
			this.drawArea.style.overflowY = "auto";
		}
	}

	setConnectionToParent(node) {
		const stacked = node.stackParentId

		const parent = stacked ? this.nodeDB.get(stacked) : node.parent()

		const pathString = this.getPathString(parent, node, stacked);

		const connLine = this._R.path( pathString );
		this.connectionStore[node.id] = connLine;

		connLine.attr(parent.connStyle.style);
	}

	getPathString(fromNode, toNode, stacked) {
		const startPoint = fromNode.connectorPoint( true )
		const endPoint = toNode.connectorPoint( false )
		const P1 = {
			x: startPoint.x,
			y: (startPoint.y + endPoint.y) / 2
		} 
		const P2 = {
			x: endPoint.x,
			y: (startPoint.y + endPoint.y) / 2
		};

		// sp, p1, pm, p2, ep == "x,y"
		const sp = `${startPoint.x},${startPoint.y}`
		const p1 = `${P1.x},${P1.y}` 
		const p2 = `${P2.x},${P2.y}`
		const ep = `${endPoint.x},${endPoint.y}`
		let pathString 
		if(stacked) { 
			const stackPoint = `${startPoint.x},${endPoint.y}`;
			pathString = ["M", sp, 'L', stackPoint, 'L', ep];
		} else {
			pathString = ["M", sp, 'L', p1, 'L', p2, 'L', ep];
		}

		return pathString.join(" ");
	}

	setNeighbors(node, level) {
		node.leftNeighborId = this.lastNodeOnLevel[level];
		if(node.leftNeighborId) {
			node.leftNeighbor().rightNeighborId = node.id;
		}
		this.lastNodeOnLevel[level] = node.id;
	}

	calcLevelDim(node, level) {
		if (this.levelMaxDim[level]) {
			if(this.levelMaxDim[level].width < node.width){
				this.levelMaxDim[level].width = node.width;
			}

			if(this.levelMaxDim[level].height < node.height){
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
		return this.nodeDB.get( 0 );
	}
}

class NodeDB {
	constructor(nodeStructure, tree) {
		this.db	= [];

		const self = this;

		function itterateChildren(node, parentId) {

			let newNode = self.createNode(node, parentId, tree, null);

			if(node.children) {
				newNode.children = [];
				if(node.childrenDropLevel && node.childrenDropLevel > 0) {
					while(node.childrenDropLevel--) {
						const connStyle = UTIL.cloneObj(newNode.connStyle);
						newNode = self.createNode('pseudo', newNode.id, tree, null);
						newNode.connStyle = connStyle;
						newNode.children = [];
					}
				}

				const stack = (node.stackChildren && !self.hasGrandChildren(node)) 
					? newNode.id 
					: null;

				// svildren are position on separate leves, one beneeth the other
				if (stack !== null) { 
					newNode.stackChildren = []; 
				}

				node.children.forEach((n, i, array) => {
					if (stack !== null) {
						newNode =  self.createNode(n, newNode.id, tree, stack);
						if((i + 1) < array.length) newNode.children = []; 
					} else {
						itterateChildren(n, newNode.id);
					}
				})
			}
		}

		itterateChildren( nodeStructure, -1); 

		this.createGeometries(tree);
	}

	createGeometries(tree) {
		let i = this.db.length
		while(i--) {
			this.get(i).createGeometry(tree);
		}
	}

	get(nodeId) {
		return this.db[nodeId];
	}

	createNode(nodeStructure, parentId, tree, stackParentId) {

		const node = new TreeNode( nodeStructure, this.db.length, parentId, tree, stackParentId );

		this.db.push( node );
		if( parentId >= 0 ) {
			this.get( parentId ).children.push( node.id ); 
		}

		if( stackParentId ) {
			this.get( stackParentId ).stackParent = true;
			this.get( stackParentId ).stackChildren.push( node.id );
		}

		return node;
	}

	getMinMaxCoord( dim, parent, MinMax ) { 
		parent = parent || this.get(0)
		let i = parent.childrenCount()
		MinMax = MinMax || { 
			min: parent[dim],
			max: parent[dim] + ((dim == 'X') ? parent.width : parent.height)
		};

		while(i--) {

			const node = parent.childAt(i)
			const maxTest = node[dim] + ((dim == 'X') ? node.width : node.height)
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

	hasGrandChildren(nodeStructure) {
		let i = nodeStructure.children.length;
		while(i--) {
			if(nodeStructure.children[i].children) {
				return true;
			}
		}
	}
}
	
class TreeNode {
	constructor(nodeStructure, id, parentId, tree, stackParentId){
		this.id			= id;
		this.parentId	= parentId;
		this.treeId		= tree.id;
		this.prelim		= 0;
		this.modifier	= 0;

		this.stackParentId = stackParentId;
		
		this.image = nodeStructure.image;

		this.link = UTIL.createMerge( tree.CONFIG.node.link,  nodeStructure.link);

		this.connStyle = UTIL.createMerge(tree.CONFIG.connectors, nodeStructure.connectors);

		this.drawLineThrough = nodeStructure.drawLineThrough === false ? false : nodeStructure.drawLineThrough || tree.CONFIG.node.drawLineThrough;

		this.collapsable = nodeStructure.collapsable === false ? false : nodeStructure.collapsable || tree.CONFIG.node.collapsable;
		this.collapsed = nodeStructure.collapsed;

		this.text = nodeStructure.text;
		this.member = nodeStructure

		// '.node' DIV
		this.nodeInnerHTML	= nodeStructure.innerHTML;
		this.nodeHTMLclass	= (tree.CONFIG.node.HTMLclass ? tree.CONFIG.node.HTMLclass : '') + // globaly defined class for the nodex
								(nodeStructure.HTMLclass ? (' ' + nodeStructure.HTMLclass) : '');		// + specific node class

		this.nodeHTMLid		= nodeStructure.HTMLid;

	}

	Tree() {
		return TreeStore.get(this.treeId);
	}

	dbGet(nodeId) {
		return this.Tree().nodeDB.get(nodeId);
	}

	size() {
		return this.width;
	}

	childrenCount() {
		return	!this.children ? 0 : this.children.length;
	}

	childAt(i) {
		return this.dbGet( this.children[i] );
	}

	firstChild() {
		return this.childAt(0);
	}

	lastChild() {
		return this.childAt( this.children.length - 1 );
	}

	parent() {
		return this.dbGet( this.parentId );
	}

	leftNeighbor() {
		if( this.leftNeighborId ) {
			return this.dbGet( this.leftNeighborId );
		}
	}

	rightNeighbor() {
		if( this.rightNeighborId ) {
			return this.dbGet( this.rightNeighborId );
		}
	}

	leftSibling () {
		const leftNeighbor = this.leftNeighbor();
		if(leftNeighbor?.parentId == this.parentId ) {
			return leftNeighbor;
		}
	}

	rightSibling () {
		const rightNeighbor = this.rightNeighbor();
		if(rightNeighbor?.parentId == this.parentId ) {
			return rightNeighbor;
		}
	}

	childrenCenter() {
		const first = this.firstChild()
		const last = this.lastChild();
		return first.prelim + ((last.prelim - first.prelim) + last.size()) / 2;
	}

	leftMost( level, depth ) { 
		if( level >= depth ) return this;
		if( this.childrenCount() === 0 ) return;
	}

	connectorPoint(startPoint) {
		let orient = this.Tree().CONFIG.rootOrientation
		const point = {};
		if(this.stackParentId) { 
			if (orient == 'NORTH') { orient = 'WEST'; }
		}
		if (orient == 'NORTH') {
			point.x = this.X + this.width/2;
			point.y = (startPoint) ? this.Y + this.height : this.Y;
		} else if (orient == 'WEST') {
			point.x = (startPoint) ? this.X + this.width : this.X;
			point.y = this.Y + this.height/2;
		}
		return point;
	}

	createGeometry(tree) {
		const drawArea = tree.drawArea
		let image

		/////////// CREATE NODE //////////////
		let node = this.link.href ? document.createElement('a') : document.createElement('div');

		node.className = TreeNode.CONFIG.nodeHTMLclass;
		if(this.nodeHTMLclass) node.className += ' ' + this.nodeHTMLclass;

		if(this.nodeHTMLid) node.id = this.nodeHTMLid;

		if(this.link.href) {
			node.href = this.link.href;
			node.target = this.link.target;
		}

		/////////// CREATE innerHTML //////////////
		
		

		// IMAGE
		if(this.image) {
			const container = document.createElement('div')
			container.className = 'avatar'
			image = document.createElement('img');
			image.src = this.image;
			container.appendChild(image)
			node.appendChild(container);
		}

		// TEXT
		// TODO Refactor
		const container = document.createElement('div')
		if(this.text) {
			for(const key in this.text) {
				if(TreeNode.CONFIG.textClass[key]) {
					const text = document.createElement(this.text[key].href ? 'a' : 'p');

					// meke an <a> element if required
					if (this.text[key].href) {
						text.href = this.text[key].href;
						if (this.text[key].target) { text.target = this.text[key].target; }
					}

					text.className = TreeNode.CONFIG.textClass[key];
					text.appendChild(document.createTextNode(
						this.text[key].val ? this.text[key].val :
							this.text[key] instanceof Object ? "'val' param missing!" : this.text[key]
						)
					);

					container.appendChild(text);
				}
			}
		}
		if(this.member.socials){
			const socials = document.createElement('div');
			socials.className = 'socials'
			for(const key in this.member.socials) {
				const social = document.createElement('div');
				social.className = 'social'
				if(key === 'email'){
					social.innerHTML = `<a href="mailto:${this.member.socials[key].link}"><img src="./assets/${key}.png" /></a>`
				} else {
					social.innerHTML = `<a href="${this.member.socials[key].link}"><img src="./assets/${key}.png" /></a>`
				}
				socials.appendChild(social);
			}
			container.appendChild(socials);
		}
		
		node.appendChild(container)


		
		

		/////////// APPEND all //////////////
		drawArea.appendChild(node);

		this.width = node.offsetWidth;
		this.height = node.offsetHeight;

		this.nodeDOM = node;

		tree.imageLoader.processNode(this);
	};
}

Tree.CONFIG = {
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
			stroke: 'black'
		},
		stackIndent: 15
	},

	node: { 
		link: {
			target: '_self'
		}
	},

	animation: { 
		nodeSpeed: 450,
		nodeAnimation: 'linear',
		connectorsSpeed: 450,
		connectorsAnimation: 'linear'
	}
};

TreeNode.CONFIG = {
	nodeHTMLclass: 'node',

	textClass: {
		name:	'node-name',
		title:	'node-title',
		desc:	'node-desc',
		contact: 'node-contact'
	}
};

const JSONconfig = {
	make: function( configArray ) {

		this.jsonStructure = {
			chart: null,
			nodeStructure: null
		};
		//fist loop: find config, find root;
		let i = configArray.length
		while(i--) {
			const node = configArray[i];
			if (node.hasOwnProperty('container')) {
				this.jsonStructure.chart = node;
				continue;
			}

			if (!node.hasOwnProperty('parent') && ! node.hasOwnProperty('container')) {
				this.jsonStructure.nodeStructure = node;
				node.myID = this.getID();
			}
		}

		this.findChildren(configArray);
		this.jsonStructure.nodeStructure.children = this.jsonStructure.nodeStructure.children.filter(child => child.children)
		return this.jsonStructure;
	},

	findChildren: function(nodes) {
		const parents = [0];

		while(parents.length) {
			const parentId = parents.pop()
			const parent = this.findNode(this.jsonStructure.nodeStructure, parentId)
			const children = [];

			nodes.forEach(node => {
				if(node.parent && (node.parent.myID == parentId)) {
					node.myID = this.getID();
					delete node.parent;
					children.push(node);
					parents.push(node.myID);
				}

			})

			if (children.length) {
				parent.children = children;
			}
		}
	},

	findNode: function(node, nodeId) {
		if (node.myID === nodeId) {
			return node;
		} else if (node.children) {
			let childrenLen = node.children.length;
			while(childrenLen--) {
				const found = this.findNode(node.children[childrenLen], nodeId);
				if(found) {
					return found;
				}
			}
		}
	},

	getID: (function() {
		let i = 0;
		return function() {
			return i++;
		};
	})()
};

class Treant {
	treeId

	constructor(jsonConfig, callback){
		if (jsonConfig instanceof Array) {
			jsonConfig = JSONconfig.make(jsonConfig);
		}
		

		const newTree = TreeStore.createTree(jsonConfig);
		newTree.positionTree(callback);

		this.treeId = newTree.id;	
	}
}