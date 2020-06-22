// import { castNode } from './utils';

import { castNode, manualPersistent } from './utils';
import { getComponent } from './components';

export function isLazy(component)
{
	return component instanceof Promise;
}

export function lazy(component, callback)
{
	if(isLazy(component)) {
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

export function loadComponent(component, name, node, render, options = {})
{
	component = getComponent(name, component);

	let endMark = castNode('');
	let startMark = castNode('');

	// console.log(node.parentNode.childNodes);

	node.after(endMark);

	if(isLazy(component)) {
		node.parentNode.insertBefore(startMark, node);
	}

	// console.log(node.parentNode.childNodes);

	// let c = component(options, render ? false : node);

	lazy(component, (component) => {
		let c = component(options, render ? false : node);

		let componentNode = c.node;

		if(render) {
			node.replaceWith(c.node);
		}

		if(c.hooks.mounted) {
			c.hooks.mounted();
		}

		// endMark = componentNode;
	});

	// console.log(node, endMark)

	// console.log(endMark, endMark.parentNode.childNodes);

	return endMark;
}
