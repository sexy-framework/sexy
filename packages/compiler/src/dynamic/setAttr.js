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

export function setAttr({ name = 'key', Type }, point, context, options)
{
	if(Type.option[name] === undefined) {
		return;
	}

	let value = Type.option[name];
	let result = makeValue(this.context, value, makeSubscribe);

	let expression = new expressionStatement(
		new callExpression(
			new memberExpression(
				point,
				id('setAttribute')
			),
			[
				stringLiteral(`data-${name}`),
				result.expr
			]
		)
	);

	if(result.shouldWrap) {
		expression = new expressionStatement(
			new callExpression(
				id('subscribe'),
				[
					result.deps,
					new arrowFunctionExpression([],
						new blockStatement([
							expression
						])
					)
				]
			)
		);
	}

	context.push(expression);
	
	// console.log(expression);
	// return result
}