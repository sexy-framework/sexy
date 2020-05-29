import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	blockStatement,
	expressionStatement,
	callExpression,
	stringLiteral,
	assignmentExpression,
} from "@babel/types";

import { children } from './node';

export default function slot(context, options)
{
	let params = [
		id('context'),
		stringLiteral(this.name),
		options.getLastVariableId(),
	];

	let expression = new expressionStatement(
		new callExpression(id('slot'), params)
	);

	let body = [];

	children(this, body, options);

	params.push(
		new arrowFunctionExpression([
				id('node')
			],
			new blockStatement(body)
		)
	)


	context.push(expression);
}