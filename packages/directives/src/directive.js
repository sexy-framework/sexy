
export class Directive
{
	constructor(node, { options, value, rawValue }, render)
	{
		this.node = node;
		this.options = options;
		this.value = value;
		this.rawValue = rawValue;
		this.render = render;
	}

	get name()
	{
		return this.constructor.name.toLowerCase();
	}

	static getName()
	{
		return this.name.toLowerCase();
	}

	static parser(entity)
	{

	}

	static get(entity)
	{
		entity.option.directives[this.name];
	}

	mounted()
	{

	}

	unmounted()
	{

	}

}