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
		let nodeVariable = options.nodeVariable ? options.nodeVariable : options.getLastVariableId()

		return new callExpression(
			id('getNode'), [index, nodeVariable, id('render')]
		);
	});

	context.push(template.value);

	let lastChild = children(this, context, options, getFirstTemplateNode)

	if(this.isRoot()) {
		context.push(returnStatement(
			objectExpression([
				objectProperty(
					id('node'),
					conditionalExpression(
						id('render'), template.name, lastChild
					)
				),
				objectProperty(
					id('hooks'),
					id('$hooks'),
				)
			])
		));
	} else {
		context.push(returnStatement(
			conditionalExpression(
				id('render'), template.name, lastChild
			)
		));
	}
}
