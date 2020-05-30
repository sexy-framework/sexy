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
	let result = makeValue(this.context, {
		isExpression: true,
		value: value,
	}, makeComputed);

	// console.warn(result);
	return result;
}