import { RegisteredDirectives } from '@hawa/directives'

export function directives($hooks, node, directives, render)
{
	for(let name in directives) {
		if(!RegisteredDirectives.has(name)) {
			continue;
		}

		let directive = RegisteredDirectives.get(name);

		let instance = new directive(node, directives[name], render);

		instance.mounted();
	
		$hooks.unmounted.push(
			instance.unmounted.bind(instance)
		);
	}
}
