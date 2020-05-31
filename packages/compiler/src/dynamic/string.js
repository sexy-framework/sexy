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

export function string(entity, point, context, options)
{
	if(entity.value === undefined) {
		return;
	}

	let isExpression = entity.value.match(/\$\{.*\}/g) !== null;

	if(!isExpression) {
		return;
	}

	let { deps, content } = makeValue(this.context, {
		isExpression,
		value: `\`${ entity.value }\``,
	}, makeString);

	deps = new arrayExpression(deps.map((item) => {
		return id(item);
	}));


	let body = new arrowFunctionExpression([],
		new blockStatement([
			new expressionStatement(
				new assignmentExpression(
					'=',
					new memberExpression(point, id('nodeValue')),
					content
				)
			)
		])
	);

	let expression = new expressionStatement(
		new callExpression(
			id('subscribe'),
			[deps, body, id('!render')],
		)
	);

	context.push(expression);

}