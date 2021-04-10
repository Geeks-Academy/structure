

class Util {
	// @ts-ignore
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
	
	// @ts-ignore
	static createMerge(obj1, obj2) {
		const newObj = {};
		if(obj1) this.inheritAttrs(newObj, this.cloneObj(obj1));
		if(obj2) this.inheritAttrs(newObj, obj2);
		return newObj;
	}

	// @ts-ignore
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

	static addEvent(el: HTMLImageElement, eventType: 'load' | 'error', handler: () => void) {
		el.addEventListener(eventType, handler, false);
	}

};

export default Util