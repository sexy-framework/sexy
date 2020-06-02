import traverse from "@babel/traverse";
import * as parser from "@babel/parser";
import generate from "@babel/generator";

import { props } from "./props";
import { observables } from "./observables";
import { computeds } from "./computeds";
import { hooks } from "./hooks";

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

	props(ast);
	observables(ast);
	computeds(ast, analyse);
	hooks(ast, analyse);

	let code = generate(ast, {
		retainLines: false,
		compact: false,
		minified: false,
		concise: false,
		quotes: "double",
	});

	return code.code;
}