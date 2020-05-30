import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	blockStatement,
	returnStatement,
	conditionalExpression,
	callExpression,
} from "@babel/types";

import { children, getFirstTemplateNode } from './utils';

export default function each(context, options)
{
	let params = [];
	let body = [];

	params.push(options.getLastVariableId())
	params.push(id(this.value));

	let template = options.createVariable(body, (n, l) => {
		let index = options.createTemplate(this);
		return new callExpression(
			id('getNode'), [index, id('null'), id('true')]
		);
	});

	body.push(template.value);

	let lastChild = children(this, body, options, getFirstTemplateNode);

	let returnPointer = new returnStatement(
		new conditionalExpression(
			id('render'), template.name, lastChild
		)
	);

	body.push(returnPointer);

	params.push(
		new arrowFunctionExpression([
			id('item'), // replace with expression parse
			id('key') // replace with expression parse
		], new blockStatement(body))
	);

	let expression = options.createVariable(context, (n, l) => {
		return new callExpression(id('_each$'), params);
	});

	context.push(expression.value);
}