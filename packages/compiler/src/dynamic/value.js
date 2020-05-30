import {
	memberExpression,
	identifier as id,
	returnStatement,
	blockStatement,
	stringLiteral,
	expressionStatement,
	callExpression,
	objectExpression,
	objectProperty,
	arrayExpression,
	arrowFunctionExpression,
	functionExpression,

} from "@babel/types";

import * as parser from "@babel/parser";

import traverse from "@babel/traverse";

export function makeValue(context, value, fn)
{
	if(!value.isExpression) {
		return stringLiteral(value.value);
	}

	let code = `tmp = ${value.value}`;

	const ast = parser.parse(code, {
		sourceType: "unambiguous",
		strictMode: false,
	});

	return fn(ast, context);
}

export function makeFunction(ast, context)
{
	traverse(ast, {
		Identifier: {
			enter(path)
			{
				let id = path.node;
				if(context.methods.includes(id.name)) {
					if(path.parent.type !== 'CallExpression') {
						id.name = `${id.name}()`;
					}
				}
				
			},
		}
	});

	let result = ast.program.body[0];

	result = result.expression.right;

	return new functionExpression(null, [id('event')], new blockStatement([
		new returnStatement(result)
	]));
}

export function makeComputed(ast, context)
{
	let deps = [];

	traverse(ast, {
		Identifier: {
			enter(path)
			{
				let id = path.node;

				if(['label', 'key'].includes(path.key)) {
					return;
				}

				if(context.observables.includes(id.name)) {
					deps.push(id.name);
					id.name = `${ id.name }()`;
				}
			},
			exit(path) {

			},
		}
	});

	let result = ast.program.body[0];

	result = result.expression.right;
	
	if(deps.length === 0) {
		return result;
	}
	
	deps = new arrayExpression(deps.map((item) => {
		return id(item);
	}));


	let body = new arrowFunctionExpression([],
		new blockStatement([
			new returnStatement(result)
		])
	);

	return new callExpression(
		id('computed'),
		[deps, body]
	)
}