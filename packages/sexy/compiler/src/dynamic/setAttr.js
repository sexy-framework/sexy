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

export function setAttr({ name = 'key', value, Type }, point, context, options)
{
	if((Type.option === undefined || Type.option[name] === undefined) && value === undefined) {
		return;
	}

	if(value === undefined) {
		value = Type.option[name];
	}

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


	// if(result.shouldWrap) {
		expression = new expressionStatement(
			new callExpression(
				id('subscribe'),
				[
					result.deps,
					new arrowFunctionExpression([],
						new blockStatement([
							expression
						])
					),
					id('!render')
				]
			)
		);
	// }

	context.push(expression);
	
	// console.log(expression);
	// return result
}
