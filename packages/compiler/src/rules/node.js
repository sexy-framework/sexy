import {
	memberExpression,
	identifier as id,

	stringLiteral,
	expressionStatement,
	callExpression,
	objectExpression,
	objectProperty,

} from "@babel/types";

import { children } from './utils';

import { attrs } from '../dynamic';


export default function node(context, options)
{
	// let template = false;

	// if(options.customDefine !== null) {
	// 	template = options.customDefine(context, options.firstChild);
	// 	delete options.customDefine;
	// }

	// if(template === false) {
	// 	template = options.createVariable(context, (n, l) => {
	// 		return new memberExpression(
	// 			l, id(options.firstChild ? 'firstChild' : 'nextSibling')
	// 		);
	// 	});

	// 	context.push(template.makeValue);
	// }	
	
	options.dynamic.setAttr({
		Type: this,
		name: 'key',
	}, options.getLastVariableId(), context, options);

	options.dynamic.attrs(this, options.getLastVariableId(), context, options);
	options.dynamic.events(this, options.getLastVariableId(), context, options);

	children(this, context, options);
}





