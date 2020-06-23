import traverse from "@babel/traverse";

export function exportnames(ast, observables = [])
{
	let exports = [];

	traverse(ast, {
		ExportNamedDeclaration: {
			enter(path)
			{
				exports.push(path.node);
			}
		},
	});

	return exports;
}
