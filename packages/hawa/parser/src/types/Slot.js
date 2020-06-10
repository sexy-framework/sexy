import Type from './Type';

export default class Slot extends Type
{
	constructor({ name = 'default', tag = 'span' })
	{
		super();
		this.name = name;
		this.tag = tag;
		this.children = [];	
		this.type = 'slot';

		this.execDirectives();
	}
		
	// makeTemplate(onlyChildren = true)
	// {
	// 	let template = `<${this.tag}`;

	// 	template += '>';

	// 	let childTemplate = this.children.map(child => child.makeTemplate(false)).join('');

	// 	template += childTemplate;
		
	// 	template += `</${this.tag}>`;

	// 	if(['statement', 'each', 'component'].includes(this.type)) {
	// 		return '<!---->';
	// 	}

	// 	if(!this.tag) {
	// 		return childTemplate;
	// 	}

	// 	return template;
	// }
}
