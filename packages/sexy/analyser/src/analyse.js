import { parse } from "./parse";

import { context, dependencies, imports, exportnames } from './types';

export function analyse(script, options)
{
	let source = '';
	let scriptOptions = {
		empty: false,
		async: false,
	};

	if(script) {
		source = script.source;
		scriptOptions.empty = script.options['ssr-only'] || false;
		scriptOptions.async = script.options.async || false;
	}
	
	const ast = parse(source);

	let data = context(ast);
	let deps = dependencies(ast, data.observables);
	let importsData = imports(ast);
	let exportsData = exportnames(ast, options);

	return {
		context: data,
		deps: deps,
		imports: importsData,
		exportnames: exportsData,
		scriptOptions,
	};
}
