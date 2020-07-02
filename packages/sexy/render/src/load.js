// import { castNode } from './utils';

import { castNode, manualPersistent } from './utils';
import { getComponent } from './components';

export function isLazy(component)
{
	return component instanceof Promise;
}

export function lazyArray(modules, callback)
{
	let shouldWait = false;

	for(let m of modules) {
		if(isLazy(m)) {
			shouldWait = true;
		}
	}

	if(shouldWait) {
		Promise.all(
			modules.map(m => m.then(v => v))
		).then((modules) => {

			modules = modules.map(m => {
				let exports = Object.keys(m);
				if(exports.length === 1 && exports[0] === 'default') {
					return m.default;
				}

				return m;
			});

			callback.apply(null, modules);
		});
	} else {
		callback.apply(null, modules);
	}
}

export function lazy(modules, callback)
{
	let component = modules;

	if(Array.isArray(modules)) {
		return lazyArray(modules, callback)
	}

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

function nothing() {

}

export function loadComponent(component, name, node, render, options = {})
{
	component = getComponent(name, component);

	let endMark = castNode('');
	let startMark = castNode('');

	node.after(endMark);

	if(isLazy(component)) {
		node.parentNode.insertBefore(startMark, node);
	}

	// component; node; name; render;
	// console.log(component, name, node, render);

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
