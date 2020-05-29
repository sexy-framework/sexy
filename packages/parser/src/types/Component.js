import Type from './Type';

export default class Component extends Type
{
	constructor(name, attrs)
	{
		super();
		this.name = name;
		this.attrs = attrs;
		this.children = [];	
		this.type = 'component';
	}
	
	hasAttributes()
	{
		return Object.keys(this.attrs).length > 0
	}
}