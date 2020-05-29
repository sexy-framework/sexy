import {
	memberExpression,
	identifier as id,
	returnStatement,
	conditionalExpression,
	callExpression,
} from "@babel/types";

import { children } from './node';

export default function program(context, options)
{
	let template = options.createVariable(context, (n, l) => {
		let index = options.createTemplate(this);
		return new callExpression(
			id('getNode'), [index, id('node'), id('render')]
		);
	});

	context.push(template.value);

	let pointer = options.createVariable(context, (n, l) => {
		return new conditionalExpression(
			id('render'),
			new memberExpression(l, id('firstChild')),
			l
		)
	});
	
	context.push(pointer.value);

	children(this, context, options);
	
	// this.map((item) => item.handle(context, options));

	let returnPointer = new returnStatement(
		new conditionalExpression(
			id('render'), template.name, options.getLastVariableId()
		)
	);

	context.push(returnPointer);
}