let LifecycleBindings = new Map();

export const DOM_HOOK_PROP = '__HAWA_hooks__';
export const DOM_HOOK_ATTR = 'data-hid';

export var HAWA_ID = 0;

export function dispatchHook(node, name)
{
	let id = parseInt(node.getAttribute(DOM_HOOK_ATTR));

	let hooks = LifecycleBindings.get(id)

	if(hooks === undefined) {
		return;
	}

	if(hooks[name]) {
		hooks[name]();
	}
}

export function registerHooks(hooks, node, render)
{
	let id;

	if(render) {
		id = ++HAWA_ID;
		node.setAttribute(DOM_HOOK_ATTR, id);
	} else {
		id = node.getAttribute(DOM_HOOK_ATTR);
	}

	// console.warn(id, hooks)

	LifecycleBindings.set(id, hooks);
}

export function findAndDispatchHook(node, name)
{
	// disable for comments
	if(node.nodeType === 8) {
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