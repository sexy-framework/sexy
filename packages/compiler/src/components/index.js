function handle(components, entity)
{
	if(entity.type === 'component') {
		components.push(entity);
	}

	if(entity.children) {
		entity.children.map((item) => handle(components, item));
	}
}

export function components(entity)
{
	let components = [];

	handle(components, {
		type: null,
		children: [entity],
	});

	return (path, delimeter) => {
		let imports = new Set();

		for(let component of components) {
			imports.add(component.getImport(path, delimeter));
		}

		return Array.from(imports).join('\n');
	}
}