import Type from './Type';
import { attrs as parseAttrs } from '../attrs';

import { Node } from '../types';
import { isManualComponent } from '../utils';

export default class Component extends Type {

	constructor(name, attrs)
	{
		super();
		
		this.name = name;
		this.attrs = attrs;
		this.option = parseAttrs(attrs, true);
		this.children = [];
		this.type = 'component';

		this.execDirectives();
	}

	hasAttributes() {
		return Object.keys(this.option.attributes).length > 0
	}

	getName(name = null)
	{
		if(name === null) {
			name = this.name;
		}

		if(isManualComponent(name)) {
			return name;
		}

		return `_component_${ name.replace(/[^0-9a-z]/gi, '') }$`;
	}

	getImport(path, delimeter)
	{
		if(isManualComponent(this.name)) {
			return `let ${ this.getName() };`;
		}

		let name = this.name.replace(/[^0-9a-z]/gi, '/');

		if(this.attrs.lazy !== undefined) {
			return `const ${ this.getName() } = import("${path}/${ name }.sexy");`	
		}
		// console.log(this.name, name)
		return `import ${ this.getName() } from "${path}/${ name }.sexy";`
		
	}

	addChild(child)
	{
		let bind = this;

		if(!this.isSlot(child)) {
			bind = this.getDefaultSlot();
		}

		child.parent = bind;
		bind.children.push(child);
	}

	isSlot(entity, name = null)
	{
		return entity.type === 'node' && entity.tag === 'template' && entity.attrs.slot;
	}

	getDefaultSlot()
	{
		let defaultSlot = false;

		for(let child of this.children) {
			if(this.isSlot(child)) {
				if(child.attrs.slot === 'default') {
					defaultSlot = child;
					break;
				}
			}
		}

		if(!defaultSlot) {
			defaultSlot = new Node('template', {
				slot: 'default'
			});

			defaultSlot.parent = this;
			this.children.push(defaultSlot);
		}

		return defaultSlot;
	}
}
