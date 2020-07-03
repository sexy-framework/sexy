import * as parser from "@babel/parser";

export function parse(source) {
	return parser.parse(source, {
		sourceType: "unambiguous",
		strictMode: false,
		allowAwaitOutsideFunction: true,
		allowReturnOutsideFunction: true,
		allowImportExportEverywhere: true,
		allowSuperOutsideMethod: true,
		allowUndeclaredExports: true,
		plugins: ['topLevelAwait'],
	});
}
