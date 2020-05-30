import {
	memberExpression,
	identifier as id,

	stringLiteral,
	expressionStatement,
	callExpression,
	objectExpression,
	objectProperty,

} from "@babel/types";

import { makeValue, makeFunction } from './value';

export function events(entity, point, context, options)
{
	if(entity.option === undefined) {
		return;
	}

	let props = [];

	for(let name in entity.option.events) {
		let value = makeValue(this.context, entity.option.events[name], makeFunction);

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
			id('_makeEvents$'), [
				point,
				id('render'),
				new objectExpression(props),
			]
		)
	);

	context.push(expression);
}