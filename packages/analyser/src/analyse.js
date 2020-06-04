import * as parser from "@babel/parser";

import { context, dependencies, imports } from './types';

export function analyse(script)
{
	let source = '';

	if(script) {
		source = script.source
	}
	
	const ast = parser.parse(source, {
		sourceType: "unambiguous",
		strictMode: false,
	});

	let data = context(ast);
	let deps = dependencies(ast, data.observables);
	let importsData = imports(ast);
	
	return {
		context: data,
		deps: deps,
		imports: importsData,
	};
}