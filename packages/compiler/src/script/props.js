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

export function props(ast)
{
	let replaceVariableWith = null;
	traverse(ast, {

		VariableDeclaration: {
			exit(path) {
				if(replaceVariableWith !== null) {
					path.replaceWith(replaceVariableWith)
				}
			}
		},
		VariableDeclarator: {
			enter(path)
			{
				replaceVariableWith = null;

				let name = path.node.id;
				let value = path.node.init;

				if(value === null) {
					return;
				}
				// console.log(name, value)
				if(value.type === 'CallExpression' && value.callee.name === 'p') {

					let propVariable = memberExpression(id('$props'), name);

					replaceVariableWith = variableDeclaration(
						'let',
						[variableDeclarator(
							name,
							new callExpression(
								id('_getProp$'),
								[
									id('$props'),
									stringLiteral(name.name),
									value.arguments[0],
								]
							)
						)]
					)
				}
		    },
		},
	});

	return ast;
}