let LifecycleBindings = new Map();

export const DOM_HOOK_PROP = '__HAWA_hooks__';
export const DOM_HOOK_ATTR = 'data-hid';
export const HOOK_NAME_CLEAN_TRIGGER = 'unmounted';

export var HAWA_ID = 0;

function isLifecycleNode(node)
{
	return node.nodeType !== 8 && node.nodeType !== 3;
}

export function dispatchHook(node, name)
{
	if(!isLifecycleNode(node)) {
		return;
	}

	let id = parseInt(node.getAttribute(DOM_HOOK_ATTR));

	let hooks = LifecycleBindings.get(id)

	if(hooks === undefined) {
		return;
	}

	for (var i = 0; i < hooks[name].length; i++) {
		hooks[name][i]();
	}

	if(name === HOOK_NAME_CLEAN_TRIGGER) {
		LifecycleBindings.delete(id);
	}
}

export function registerHooks(hooks, node, render)
{
	if(!isLifecycleNode(node)) {
		return;
	}

	let id;

	if(render) {
		id = ++HAWA_ID;
		node.setAttribute(DOM_HOOK_ATTR, id);
	} else {
		id = parseInt(node.getAttribute(DOM_HOOK_ATTR));
	}

	LifecycleBindings.set(id, hooks);
}

export function findAndDispatchHook(node, name)
{
	// disable for comments
	if(!isLifecycleNode(node)) {
		return;
	}

	let nodes = node.querySelectorAll(`[${ DOM_HOOK_ATTR }]`);

	for (var i = 0; i < nodes.length; i++) {
		dispatchHook(nodes[i], name);
	}

	if(node.hasAttribute(DOM_HOOK_ATTR)) {
		dispatchHook(node, name);
	}
	// console.log(node, nodes);
}