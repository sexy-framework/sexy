import traverse from "@babel/traverse";

import {
	identifier as id,
	ExportNamedDeclaration,
	ExportSpecifier,
	variableDeclarator,
	variableDeclaration,
	StringLiteral,
} from "@babel/types";

export function exportnames(ast, options)
{
	let exportnames = [];

	let isExportDeclaration = false;
	let hasLayout = false;
	let hasSSROnly = false;

	traverse(ast, {
		ExportNamedDeclaration: {
			enter(path)
			{
				isExportDeclaration = true;
				exportnames.push(path.node);
			},
			exit(path) {
				isExportDeclaration = false;
			}
		},
		Identifier(path)
		{
			if(!isExportDeclaration) {
				return;
			}

			if(path.node.name === 'Layout') {
				hasLayout = true;
			}

			if(path.node.name === 'SSR_ONLY') {
				hasSSROnly = true;
			}
		}
	});

	if(options.isPage && options.layouts && !hasLayout) {
		exportnames.push(
			ExportNamedDeclaration(
				null,
				[ExportSpecifier(
					id('Layout'),
					id('Layout'),
				)],
				StringLiteral(options.layouts + '/default.sexy')
			)
		)
	}

	
	if(!hasSSROnly) {
		exportnames.push(
			ExportNamedDeclaration(
				variableDeclaration(
					'const', [
						variableDeclarator(
							id('SSR_ONLY'),
							id('false'),
						)
					]
				), []
			)
		)
	}

	if(options.isLayout) {
		exportnames.push(
			ExportNamedDeclaration(
				variableDeclaration(
					'const', [
						variableDeclarator(
							id('Layout'),
							id('render'),
						)
					]
				), []
			)
		)
	}

	return exportnames;
}
