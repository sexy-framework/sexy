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

export function directives(directives, context, options)
{
	if(Object.keys(directives).length === 0) {
		return null;
	}

	let result = [];

	for(let name in directives) {
		let directive = directives[name];
		
		let config = [];

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

		config.push(
			objectProperty(
				id('value'),
				id(directive.rawValue),
			)
		);

		config.push(
			objectProperty(
				id('rawValue'),
				stringLiteral(directive.rawValue)
			)
		);

		config.push(
			objectProperty(
				id('options'),
				options,
			)
		);

		result.push(
			objectProperty(
				stringLiteral(name),
				objectExpression(config)
			)
		);
	}

	return objectExpression(result);
}