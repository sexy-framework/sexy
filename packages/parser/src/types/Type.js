import { rules } from '@hawa/compiler';

export default class Type
{
	constructor()
	{
		this.parent = null;
	}

	map(callback)
	{
		if(this.children && this.type !== 'statement') {
			this.children.map(callback);
		}
	}

	addChild(child)
	{
		child.parent = this;
		this.children.push(child);
	}

	handle(context, options)
	{
		return rules[this.type].call(this, context, options);
	}

	makeTemplate(onlyChildren = true)
	{
		let template = `<${this.tag}`;
		
		for(let key in this.attrs) {
			template += ` ${key}="${this.attrs[key]}"`;
		}

		template += '>';

		let childTemplate = this.children.map(child => child.makeTemplate(false)).join('');

		template += childTemplate;
		
		template += `</${this.tag}>`;

		if(['statement', 'each', 'component'].includes(this.type)) {
			return '<!---->';
		}

		if(!this.tag) {
			return childTemplate;
		}

		return template;
	}
}