import Type from './Type';

export default class Text extends Type
{
	constructor(text)
	{
		super();
		
		this.value = text;
		this.type = 'text';

		this.execDirectives();
	}

	makeTemplate()
	{
		return this.value
				.replace(/\&/g, "&amp;")
				.replace(/\"/g, "&quot;")
				.replace(/\'/g, "&apos;");
	}

}
