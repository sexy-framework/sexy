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
	arrowFunctionExpression,
	functionExpression,
} from "@babel/types";

export function script(analyse, source)
{
	source = source || '';
	
	const ast = parser.parse(source, {
		sourceType: "unambiguous",
		strictMode: false,
	});

	traverse(ast, {

		VariableDeclarator: {
			enter(path)
			{
				let id = path.node.id;
				let value = path.node.init;

				if(value.type === 'CallExpression' && value.callee.name === 'o') {
					value.callee.name = 'observable';
				}
		    },
		    exit() {

		    }
		},
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

	let code = generate(ast, {
		retainLines: false,
		compact: false,
		minified: false,
		concise: false,
		quotes: "double",
	});

	return code.code;
}