import {
	memberExpression,
	identifier as id,
	returnStatement,
	conditionalExpression,
	callExpression,
	arrowFunctionExpression,
	blockStatement,
	expressionStatement,
	objectExpression,
	objectProperty,
} from "@babel/types";

import { children, getFirstTemplateNode } from './utils';

export default function program(context, options)
{
	// init template
	let template = options.createVariable(context, (n, l) => {
		let index = options.createTemplate(this);
		return new callExpression(
			id('getNode'), [index, options.getLastVariableId(), id('render')]
		);
	});

	context.push(template.value);

	let lastChild = children(this, context, options, getFirstTemplateNode)

	let returnedNode = new conditionalExpression(
		id('render'), template.name, lastChild
	);

	if(this.isRoot()) {
		context.push(returnStatement(objectExpression(
			[
				objectProperty(id('$node'), returnedNode),
				objectProperty(id('$hooks'), id('_hooks$')),
			]
		)));
	} else {
		context.push(returnStatement(
			returnedNode
		));
	}
}