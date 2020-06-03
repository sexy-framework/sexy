import traverse from "@babel/traverse";

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
	logicalExpression,
	arrowFunctionExpression,
	functionExpression,
	variableDeclarator,
	variableDeclaration,
} from "@babel/types";

export const HOOK_NAMES = ['mounted', 'unmounted'];

export function hooks(ast, { context })
{
	// _hooks$
	let hooks = context.methods.filter(name => {
		return HOOK_NAMES.includes(name)
	});

	let hookObject = {
		mounted: [],
		unmounted: [],
	};

	for(let name of hooks) {
		hookObject[name].push(name);
	}

	let body = [];

	for(let name in hookObject) {
		let methods = [];

		for(let m of hookObject[name]) {
			methods.push(id(m));
		}

		hookObject[name].push(name);
		body.push(
			objectProperty(
				id(name),
				arrayExpression(methods),
			)
		)
	}

	let hooksDeclaration = variableDeclaration('let', [
		variableDeclarator(
			id('$hooks'),
			objectExpression(body)
		)]
	)

	ast.program.body.push(hooksDeclaration)

	return ast;
}