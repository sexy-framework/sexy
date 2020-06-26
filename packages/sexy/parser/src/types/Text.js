import Type from './Type';

export default class Text extends Type
{
	constructor(text)
	{
		super();
		
		this.value = this.prepareText(text);
		this.type = 'text';

		this.execDirectives();
	}

	prepareText(text)
	{
		return text
			.replace(/\&/g, "&amp;")
			.replace(/\"/g, "&quot;")
			.replace(/\'/g, "&apos;")
			.replace(new RegExp("`"), "&rsquo;")
			.replace(new RegExp("’"), "&grave;")
	}

	makeTemplate()
	{
		return this.value;
	}

}
