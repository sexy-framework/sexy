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

function addSettings(options, transition)
{
	if(transition) {
		options.push(
			id(transition.name)
		);

		options.push(
			id(transition.options)
		);
	} else {
		options.push(
			id('null')
		);

		options.push(
			id('null')
		);
	}
}

export function transition(transition, pointer, context, options)
{
	if(transition.in === null && transition.out === null) {
		return null;
	}

	let args = [
		pointer,
	];

	addSettings(args, transition.in);
	addSettings(args, transition.out);

	context.push(
		expressionStatement(
			callExpression(
				id('_transition$'), 
				args
			)
		)
	);
}
