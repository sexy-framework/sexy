import { root, getRoot } from '@hawa/observable';

export function render(component, rootNode)
{
	let root = getRoot();
	let c = component();

	rootNode.innerHTML = '';
	rootNode.appendChild(c.node);

	if(c.hooks.mounted) {
		c.hooks.mounted();
	}

	return () => {
		root.cleanup();
	}
}


export function hydrate(component, rootNode)
{
	let tmp = rootNode.innerHTML;
	rootNode.innerHTML = tmp;

	let root = getRoot();

	let c = component(null, rootNode.firstChild);

	if(c.hooks.mounted) {
		c.hooks.mounted();
	}

	return () => {
		root.cleanup();
	}
}