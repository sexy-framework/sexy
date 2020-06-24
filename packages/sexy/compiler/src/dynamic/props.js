import {
	memberExpression,
	identifier as id,

	stringLiteral,
	expressionStatement,
	callExpression,
	objectExpression,
	objectProperty,

} from "@babel/types";

import { makeValue } from './value';

export function props(entity, point, context, options)
{
	if(entity.option.attributes === undefined) {
		return;
	}

	for(let name in entity.option.attributes) {
		let value = makeValue(entity.option.attributes[name]);
	}


	console.warn(entity.option.attributes)

	return;

	let props = [];

	for(let key in this.attrs) {
		props.push(
			new objectProperty(
				stringLiteral(key),
				stringLiteral(this.attrs[key]),
			)
		)
	}

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
