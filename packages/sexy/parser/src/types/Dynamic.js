import Component from './Component';
import { attrs as parseAttrs } from '../attrs';

export default class Dynamic extends Component
{
	constructor(attrs)
	{
		super();

		// this.tag = tag;
		this.attrs = attrs;
		this.option = parseAttrs(attrs);
		this.children = [];	
		this.type = 'dynamic';

		this.execDirectives();
	}

	// hasAttributes()
	// {
	// 	return Object.keys(this.option.attributes).length > 0
	// }
}
