import { root, getRoot } from 'sexy-framework/observable';
import { lazy } from './load';

export function render(component, rootNode)
{
	let root = getRoot();
	
	lazy(component, (component) => {

		let c = component();

		rootNode.innerHTML = '';
		rootNode.appendChild(c.node);

		if(c.hooks.mounted) {
			c.hooks.mounted();
		}
	});

	return () => {
		root.cleanup();
	}
}

export function refresh(rootNode)
{
	let tmp = rootNode.innerHTML;
	rootNode.innerHTML = tmp;
}

export function hydrate(component, rootNode)
{
	let root = getRoot();

	lazy(component, (component) => {
		let c = component(null, rootNode.firstChild);

		if(c.hooks && c.hooks.mounted) {
			c.hooks.mounted();
		}
	});
	
	return () => {
		root.cleanup();
	}
}
