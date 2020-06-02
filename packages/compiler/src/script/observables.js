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

export function observables(ast)
{
	traverse(ast, {
		VariableDeclarator: {
			enter(path)
			{
				let name = path.node.id;
				let value = path.node.init;

				if(value.type === 'CallExpression' && value.callee.name === 'o') {
					value.callee.name = 'observable';
				}
		    },
		},
	});

	return ast;
}