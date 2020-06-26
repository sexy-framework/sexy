import traverse from "@babel/traverse";

export function imports(ast, observables = [])
{
	let imports = [];

	traverse(ast, {
		ImportDeclaration: {
			enter(path)
			{
				imports.push(path.node);
			}
		},
		
	});

	return imports;
}
