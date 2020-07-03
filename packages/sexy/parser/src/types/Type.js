import { rules } from 'sexy/compiler';
import { parser } from 'sexy/directives';

const SELF_CLOSED_TAGS = ['br', 'hr', 'input'];

export default class Type
{
	constructor()
	{
		this.parent = null;
	}

	execDirectives()
	{
		parser(this);
	}

	map(callback)
	{
		if(this.children && this.type !== 'statement') {
			this.children.map(callback);
		}
	}

	setParent(parent)
	{
		this.parent = parent;
	}

	addChild(child)
	{
		// child.parent = this;
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

	skipContextCreation()
	{
		return this.hasAloneTemplate() && this.isTemplate();
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
		// let children = this.children || [];
		// console.log(children)
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

	selfClosed()
	{
		if(this.type === 'component') {
			return this.children.length === 0;
		}

		return SELF_CLOSED_TAGS.includes(this.tag);
	}

	makeTemplate(onlyChildren = true)
	{
		let selfClosed = this.selfClosed();

		let template = `<${this.tag}`;
		
		let attrs = this.option ? this.option.staticAttrs : {};

		for(let key in attrs) {
			template += ` ${key}="${attrs[key]}"`;
		}

		if(!selfClosed) {
			template += '>';
		}

		let childTemplate = this.children.map(child => child.makeTemplate(false)).join('');

		template += childTemplate;

		if(!selfClosed) {
			template += `</${this.tag}>`;
		} else {
			template += ` />`;
		}

		if(['statement', 'each', 'component', 'dynamic'].includes(this.type) && !onlyChildren) {
			return '<!---->';
		}

		if(!this.tag || this.isTemplate()) {
			return childTemplate;
		}

		return template;
	}
}
