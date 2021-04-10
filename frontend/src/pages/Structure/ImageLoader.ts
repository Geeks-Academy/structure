import Util from './Util'

class ImageLoader {
	loading: any;
	constructor(){
		this.loading = []
	}

	processNode(node: any) {
		const images = node.nodeDOM.getElementsByTagName('img')
		let i =	images.length;
		while(i--) {
			this.create(node, images[i]);
		}
	}

	removeAll(img_src: string) {
		let i = this.loading.length;
		while (i--) {
			if (this.loading[i] === img_src) { 
				this.loading.splice(i,1); 
			}
		}
	}

	create(node: any, image: HTMLImageElement) {
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

		Util.addEvent(image, 'load', imgTrigger);
		Util.addEvent(image, 'error', imgTrigger);
	}

	isNotLoading(): boolean {
		return this.loading.length === 0;
	}
}

export default ImageLoader