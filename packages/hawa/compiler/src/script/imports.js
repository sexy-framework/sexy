
import traverse from "@babel/traverse";
import * as parser from "@babel/parser";
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

export function imports(ast, script)
{
	traverse(ast, {
		ImportDeclaration: {
			enter(path)
			{
				path.remove();
			}
		},
	});
}
