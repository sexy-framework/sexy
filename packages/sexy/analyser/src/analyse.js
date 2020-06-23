import * as parser from "@babel/parser";

import { context, dependencies, imports, exportnames } from './types';

export function analyse(script, options)
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
	let exportsData = exportnames(ast, options);
	
	return {
		context: data,
		deps: deps,
		imports: importsData,
		exportnames: exportsData,
	};
}
