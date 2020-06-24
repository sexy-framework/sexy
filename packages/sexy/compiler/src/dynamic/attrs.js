import {
	memberExpression,
	identifier as id,

	stringLiteral,
	expressionStatement,
	callExpression,
	objectExpression,
	objectProperty,

} from "@babel/types";

import { makeValue, makeComputed } from './value';

export function attrs(attributes, point, context, options, returnObject = false)
{
	if(attributes === undefined) {
		return;
	}

	let props = [];

	for(let name in attributes) {
		let value = makeValue(this.context, attributes[name], makeComputed);

		props.push(
			new objectProperty(
				stringLiteral(name),
				value,
			)
		)
	}

	if(props.length === 0) {
		return;
	}

	if(returnObject) {
		return objectExpression(props);
	}

	// console.log(point)

	let expression = new expressionStatement(
		new callExpression(
			id('_makeAttrs$'), [
				point,
				id('$render'),
				new objectExpression(props),
			]
		)
	);

	context.push(expression);
}
