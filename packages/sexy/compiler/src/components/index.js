function handle(components, entity)
{
	if(entity.type === 'component') {
		components.push(entity);
	}

	if(entity.children) {
		entity.children.map((item) => handle(components, item));
	}
}

export function components(entity, imports)
{
	let components = [];

	handle(components, {
		type: null,
		children: [entity],
	});

	let declaratedVars = new Set();

	for(let imp of imports) {
		declaratedVars.add(imp.specifiers[0].local.name);
	}

	return (path, delimeter) => {
		let imports = new Set();

		for(let component of components) {
			if(declaratedVars.has(component.getName())) {
				continue;
			}
			
			let i = component.getImport(path, delimeter);
			if(i !== null) {
				imports.add(i);
			}
		}

		return Array.from(imports).join('\n');
	}
}
