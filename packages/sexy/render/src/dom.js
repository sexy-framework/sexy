import { root, getRoot } from 'sexy-framework/observable';
import { lazy } from './load';

export function render(component, rootNode, context = null)
{
	let root = getRoot();
	
	lazy(component, async (component) => {

		let c = await component(context);

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

export function hydrate(component, rootNode, context = null)
{
	let root = getRoot();

	lazy(component, (component) => {
		let c = component(context, rootNode.firstChild);

		if(c.hooks && c.hooks.mounted) {
			c.hooks.mounted();
		}
	});
	
	return () => {
		root.cleanup();
	}
}
