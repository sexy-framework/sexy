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

export function directives(directives, pointer, context, options)
{
	if(Object.keys(directives).length === 0) {
		return null;
	}

	for(let name in directives) {
		let directive = directives[name];
		
		let options = [];

		for(let prop in directive.options) {
			options.push(
				objectProperty(
					id(prop),
					id('true'),
				)
			);
		}

		options = objectExpression(options);

		let value = directive.value == '' ? 'null' : directive.value;

		context.push(
			expressionStatement(
				callExpression(
					id('_directive$'), [
						id('$hooks'),
						id(name),
						pointer,
						options,
						id(value),
						id('render'),
					]
				)
			)
		);
	}
}
