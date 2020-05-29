import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	blockStatement,
	callExpression,
	expressionStatement,
	stringLiteral,
	objectExpression,
	objectProperty,
} from "@babel/types";

import { attrs, } from './node';

export default function component(context, options)
{
	
	let init = options.createVariable(context, (n, l) => {
		return new callExpression(
			id('getComponent'), [
				stringLiteral(this.name),
				l,
				id('render')
			]
		);
	});

	context.push(init.value);

	attrs.call(this, init, context, options);

	let template = options.createVariable(context, (n, l) => {
		return new memberExpression(
			l, id('nextSibling')
		);
	});

	context.push(template.value);

}