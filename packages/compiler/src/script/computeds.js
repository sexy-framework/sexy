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

export function computeds(ast, analyse)
{
	let replaceVariableWith = null;
	traverse(ast, {

		ArrowFunctionExpression: {
			enter(path)
			{
				if(path.container.type === 'VariableDeclarator') {
					let name = path.container.id.name;
					path.replaceWith(
						new callExpression(
							id('computed'),
							[
								arrayExpression(
									analyse.deps[name].map(item => id(item))
								), path.node]
						)
					);
				}
			},
		    exit(path)
		    {
				
		    }
		},
	});

	return ast;
}