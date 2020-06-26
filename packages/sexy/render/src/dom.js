import { root, getRoot } from 'sexy-framework/observable';
import { lazy } from './load';

export function firstChild(node)
{
	let tmp = node.firstChild;
	
	if(tmp.nodeType === 3 && tmp.nodeValue === '') {
		return node.firstElementChild;
	}

	return tmp;
}

export function nextSibling(node)
{
	let tmp = node.nextSibling;

	if(tmp.nodeType === 3 && tmp.nodeValue === '') {
		return node.nextElementSibling;
	}

	return tmp;
}

export function render(component, rootNode, context = null)
{
	let root = getRoot();
	
	// There is problem with async await on production build probably
	// Page build very slow
	lazy(component, (component) => {

		let c = component(context);

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
