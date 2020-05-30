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

	skipInit()
	{
		return false;//this.type === 'program' || this.type === 'slot';
	}

	makeTemplate(onlyChildren = true)
	{
		// console.log(this, onlyChildren)
		let template = `<${this.tag}`;
		
		let attrs = this.option ? this.option.staticAttrs : {};

		for(let key in attrs) {
			template += ` ${key}="${attrs[key]}"`;
		}

		template += '>';

		let childTemplate = this.children.map(child => child.makeTemplate(false)).join('');

		template += childTemplate;
		
		template += `</${this.tag}>`;

		if(['statement', 'each', 'component'].includes(this.type) && !onlyChildren) {
			return '<!---->';
		}

		if(!this.tag) {
			return childTemplate;
		}

		return template;
	}
}