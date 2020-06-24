
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

export function exportnames(ast, script)
{
	traverse(ast, {
		ExportNamedDeclaration: {
			enter(path)
			{
				path.remove();
			}
		},
	});
}
