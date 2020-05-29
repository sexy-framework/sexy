import Type from './Type';

export default class Slot extends Type
{
	constructor({ name = 'default', tag = null })
	{
		super();
		this.name = name;
		this.tag = tag;
		this.children = [];	
		this.type = 'slot';
	}
	
}