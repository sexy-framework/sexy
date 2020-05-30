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

export function attrs(entity, point, context, options)
{
	if(entity.option.attributes === undefined) {
		return;
	}

	let props = [];

	for(let name in entity.option.attributes) {
		let value = makeValue(this.context, entity.option.attributes[name]);

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

	let expression = new expressionStatement(
		new callExpression(
			id('_makeAttrs$'), [
				point,
				id('render'),
				new objectExpression(props),
			]
		)
	);

	context.push(expression);
}