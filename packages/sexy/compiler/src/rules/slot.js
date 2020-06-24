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

import { children } from './utils';

export default function slot(context, options)
{
	let params = [
		id('$slots'),
		stringLiteral(this.name),
		options.getLastVariableId(),
		id('$render'),
	];

	let expression = new expressionStatement(
		new callExpression(id('_slot$'), params)
	);

	let body = [];

	children(this, body, options);

	params.push(
		new arrowFunctionExpression([
				id('$node')
			],
			new blockStatement(body)
		)
	)

	context.push(expression);
}
