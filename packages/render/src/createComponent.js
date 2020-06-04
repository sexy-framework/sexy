export const DOM_HOOK_ATTR = 'data-hid';

export var HAWA_ID = 0;

export function createComponent(node, render)
{
	let id;

	if(render) {
		id = ++HAWA_ID;
		node.setAttribute(DOM_HOOK_ATTR, id);
	} else {
		id = parseInt(node.getAttribute(DOM_HOOK_ATTR));
	}

	return id;
}