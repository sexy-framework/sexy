export const DOM_HOOK_ATTR = 'data-hid';

export var HAWA_ID = 0;

export function createComponent(node, render)
{
	let id;

	if(render) {
		id = ++HAWA_ID + '';
		node.setAttribute(DOM_HOOK_ATTR, id);
	} else {
		id = node.getAttribute(DOM_HOOK_ATTR);
	}

	return id;
}

const REGISTERED_COMPONENTS = {};

export function registerComponent(name, fn)
{
	REGISTERED_COMPONENTS[name] = fn;
}

export function getComponent(name, fn)
{
	if(fn) {
		return fn;
	}

	if(REGISTERED_COMPONENTS[name]) {
		return REGISTERED_COMPONENTS[name];
	}

	throw new Error(`There is no component: ${name} registered`);
}
