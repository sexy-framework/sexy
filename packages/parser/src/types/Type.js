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

	isRoot()
	{
		return this.parent === null;
	}

	skipFirstChildInit()
	{
		if(this.isTemplate()) {
			if(this.attrs) {
				return this.attrs.slot === undefined;
			}

			return true;
		}

		return false;
	}

	isTemplate()
	{
		return (this.type === 'node' && this.tag === 'template');
	}

	hasAloneTemplate()
	{
		let alone = true;

		for(let child of this.children) {
			if(!child.isTemplate()) {
				alone = false;
			}
		}

		return alone;
	}

	skipInit()
	{
		return false;//this.type === 'program' || this.type === 'slot';
	}

	makeTemplate(onlyChildren = true)
	{
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

		if(!this.tag || this.isTemplate()) {
			return childTemplate;
		}

		return template;
	}
}