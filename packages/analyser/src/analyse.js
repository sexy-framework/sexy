import * as parser from "@babel/parser";

import { context, dependencies } from './types';

export function analyse(source)
{
	source = source || '';
	
	const ast = parser.parse(source, {
		sourceType: "unambiguous",
		strictMode: false,
	});

	let data = context(ast);
	let deps = dependencies(ast, data.observables);

	return {
		context: data,
		deps: deps,
	};
}