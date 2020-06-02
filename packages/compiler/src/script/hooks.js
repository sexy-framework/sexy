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

	let hooksLinks = [];

	for(let name of hooks) {
		hooksLinks.push(
			objectProperty(
				id(name),
				id(name),
			)
		);
	}

	let hooksDeclaration = variableDeclaration('let', [
		variableDeclarator(
			id('_hooks$'),
			objectExpression(hooksLinks)
		)]
	)

	ast.program.body.push(hooksDeclaration)

	return ast;
}