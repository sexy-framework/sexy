import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	blockStatement,
	callExpression,
} from "@babel/types";

export default function each(context, options)
{
	let params = [];

	params.push(options.getLastVariableId())
	params.push(id(this.value));

	for (var i = 0; i < this.children.length; i++) {
		let block = this.children[i];
		let body = [];

		this.children[i].handle(body, options);

		
		params.push(
			new arrowFunctionExpression([], new blockStatement(body))
		);
	}

	let expression = options.createVariable(context, (n, l) => {
		return new callExpression(id('each'), params);
	});


	context.push(expression.value);
}