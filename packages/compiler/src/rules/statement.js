import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	blockStatement,
	callExpression,
	arrayExpression,
} from "@babel/types";

export default function statement(context, options)
{
	let params = [];

	params.push(options.getLastVariableId())
	params.push(id('render'))

	let itemParams = [];
	let dependencies = [];
	for (var i = 0; i < this.children.length; i++) {
		let block = this.children[i];
		let body = [];

		this.children[i].handle(body, {
			nodeVariable: id('node'),
			...options
		});

		// Wrap statement arrow function and get deps of function that will be global for whole function
		let { value, deps } = options.dynamic.arrowFunction({
			value: block.value,
		}, options.getLastVariableId(), context, options);

		dependencies = [
			...dependencies,
			...deps
		];
		
		itemParams.push(value);
		itemParams.push(
			new arrowFunctionExpression([
				id('node'),
				id('render')
			], new blockStatement(body))
		);
	}

	params.push(
		arrayExpression(dependencies.map(item => id(item)))
	);

	params = params.concat(itemParams);

	let expression = options.createVariable(context, (n, l) => {
		return new callExpression(id('_statement$'), params);
	});


	context.push(expression.value);
}