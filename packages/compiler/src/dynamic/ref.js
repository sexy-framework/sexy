import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	stringLiteral,
	expressionStatement,
	returnStatement,
	callExpression,
	objectExpression,
	objectProperty,
	arrayExpression,
	blockStatement,
	assignmentExpression,
} from "@babel/types";

import { makeValue, makeSubscribe } from './value';

export function ref(entity, point, context, options)
{
	if(entity.option.ref === undefined) {
		return;
	}

	let expression = new expressionStatement(
		new callExpression(
			id('_setRef$'),
			[
				id('$refs'),
				point,
				stringLiteral(entity.option.ref)
			]
		)
	);

	context.push(expression);
}