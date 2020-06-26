import traverse from "@babel/traverse";
import { parse } from 'sexy-framework/analyser';
import generate from "@babel/generator";

import { props } from "./props";
import { observables } from "./observables";
import { computeds } from "./computeds";
import { hooks } from "./hooks";
import { imports } from "./imports";
import { exportnames } from "./exportnames";

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

export function script(analyse, script, loaderOptions)
{
	let source = '';

	if(script) {
		source = script.source
	}
	
	const ast = parse(source);

	props(ast);
	observables(ast);
	computeds(ast, analyse);
	hooks(ast, analyse);
	imports(ast, loaderOptions);
	exportnames(ast);

	let code = generate(ast, {
		retainLines: false,
		compact: false,
		minified: false,
		concise: false,
		quotes: "double",
	});

	return code.code;
}
