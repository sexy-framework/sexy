import Type from './Type';

export default class Expression extends Type
{
	constructor({ type = null, value = null })
	{
		super();
		this.type = type;
		this.value = value;
		this.children = [];
	}

	

	

	
}