import { castNode } from './utils.js';

export function lazy(component, callback)
{
	if(component instanceof Promise) {
		component.then((module) => {
			callback(
				module.default
			);
		});

		return;
	}

	callback(
		component
	);
}

export function loadComponent(component, node, render, options = {})
{
	let endMark = castNode('');

	node.after(endMark);

	lazy(component, (component) => {
		let c = component(options, render ? false : node);

		let componentNode = c.node;

		if(render) {
			node.replaceWith(componentNode);
		}

		if(c.hooks.mounted) {
			c.hooks.mounted();
		}
	});

	return endMark;
}