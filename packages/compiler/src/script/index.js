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

export function script(analyse, script)
{
	let source = '';

	if(script) {
		source = script.source
	}
	
	const ast = parser.parse(source, {
		sourceType: "unambiguous",
		strictMode: false,
	});

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

				if(value.type === 'CallExpression' && value.callee.name === 'o') {
					value.callee.name = 'observable';
				}

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
									// arrayExpression(
									// 	[propVariable]
									// ), 
									// arrowFunctionExpression([],
									// 	blockStatement([
									// 		returnStatement(
									// 			logicalExpression(
									// 				'||',
									// 				propVariable,
									// 				value.arguments[0],
									// 			)
									// 		)
									// 	])
									// )
								]
							)
						)]
					)
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