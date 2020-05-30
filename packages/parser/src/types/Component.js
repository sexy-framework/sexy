import Type from './Type';
import { attrs as parseAttrs } from '../attrs';

export default class Component extends Type
{
	constructor(name, attrs)
	{
		super();
		this.name = name;
		this.options = parseAttrs(attrs);
		this.children = [];	
		this.type = 'component';
	}
	
	hasAttributes()
	{
		return Object.keys(this.option.attributes).length > 0
	}
}