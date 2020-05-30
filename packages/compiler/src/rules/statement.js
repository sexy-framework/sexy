import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	blockStatement,
	callExpression,
} from "@babel/types";

export default function statement(context, options)
{
	let params = [];

	params.push(options.getLastVariableId())

	for (var i = 0; i < this.children.length; i++) {
		let block = this.children[i];
		let body = [];

		this.children[i].handle(body, {
			lastContextVariableId: options.getLastVariableId(),
			...options
		});

		params.push(id(block.value));
		params.push(
			new arrowFunctionExpression([
				id('node')
			], new blockStatement(body))
		);
	}


	let expression = options.createVariable(context, (n, l) => {
		return new callExpression(id('_statement$'), params);
	});


	context.push(expression.value);
}