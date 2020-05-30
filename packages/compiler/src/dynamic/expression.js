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

import { makeValue, makeComputed } from './value';

export function expression(value, point, context, options)
{
	if(typeof value !== 'object') {
		value = {
			isExpression: true,
			value: value,
		};
	}

	let result = makeValue(this.context, value, makeComputed);

	// console.warn(result);
	return result;
}