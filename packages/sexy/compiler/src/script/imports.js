import traverse from "@babel/traverse";
import generate from "@babel/generator";

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

export function imports(ast, loaderOptions)
{
	traverse(ast, {
		ImportDeclaration: {
			enter(path)
			{
				path.remove();
			}
		},

		Import: {
			enter(path)
			{
				if(!loaderOptions.client) {
				// console.log(path)
					path.replaceWith(id('require'));
				}
			}
		},
	});
}
