
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

	let imports = [];
	
	const ast = parser.parse(source, {
		sourceType: "unambiguous",
		strictMode: false,
	});

	traverse(ast, {
		ImportDeclaration: {
			enter(path)
			{
				path.remove();
				imports[path.node.source.value] = path.node;
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