import Type from './Type';

export default class Node extends Type
{
	constructor(tag, attrs)
	{
		super();
		this.tag = tag;
		this.attrs = attrs;
		this.children = [];	
		this.type = 'node';
	}

	hasAttributes()
	{
		return Object.keys(this.attrs).length > 0
	}	
}