import { DOM_HOOK_ATTR } from '@hawa/render';

let LifecycleBindings = new Map();

export const HOOK_NAME_CLEAN_TRIGGER = 'unmounted';

function isLifecycleNode(node)
{
	return node.nodeType !== 8 && node.nodeType !== 3;
}

export function dispatchHook(id, name)
{
	if(id === null) {
		return;
	}

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

export function createHooks(hooks, id)
{
	LifecycleBindings.set(id, hooks);
}

export function getHID(node)
{
	try {
		return node.getAttribute(DOM_HOOK_ATTR);
		// return id;
	} catch(err) {
		return null;
	}
}

export function findAndDispatchHook(node, name)
{
	// disable for comments
	if(!isLifecycleNode(node)) {
		return;
	}

	let nodes = node.querySelectorAll(`[${ DOM_HOOK_ATTR }]`);

	for (var i = 0; i < nodes.length; i++) {
		dispatchHook(getHID(nodes[i]), name);
	}

	// if(node.hasAttribute(DOM_HOOK_ATTR)) {
	dispatchHook(getHID(node), name);
	// }
	// console.log(node, nodes);
}