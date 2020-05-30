import {
	memberExpression,
	identifier as id,
	returnStatement,
	conditionalExpression,
	callExpression,
} from "@babel/types";

import { children, getFirstTemplateNode } from './utils';

export default function program(context, options)
{
	let template = options.createVariable(context, (n, l) => {
		let index = options.createTemplate(this);
		return new callExpression(
			id('getNode'), [index, options.getLastVariableId(), id('render')]
		);
	});

	context.push(template.value);
	

	let lastChild = children(this, context, options, getFirstTemplateNode)

	

	let returnPointer = new returnStatement(
		new conditionalExpression(
			id('render'), template.name, lastChild
		)
	);

	context.push(returnPointer);
}