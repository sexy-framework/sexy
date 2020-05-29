import Type from './Type';

export default class Text extends Type
{
	constructor(text)
	{
		super();
		this.value = text;
		this.type = 'text';
	}

	makeTemplate()
	{
		return this.value;
	}

}