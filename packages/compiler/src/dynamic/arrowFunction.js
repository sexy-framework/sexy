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

import { makeValue, makeString } from './value';

export function arrowFunction({ value = [], args = [] }, point, context, options)
{
	if(typeof value !== 'object') {
		value = {
			isExpression: true,
			value: value,
		};
	}
	
	let result = makeValue(this.context, value, makeString);

	// console.log(result)
	return {
		value: new arrowFunctionExpression(
			args.map(item => id(item)),
			new blockStatement([
				new returnStatement(result.content)
			]),
		),
		deps: result.deps,
	}
}