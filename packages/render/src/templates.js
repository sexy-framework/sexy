
export function getNode(template, node, render) {
	if (render) {
		return template.content.cloneNode(true);
	}

	return node;
}

export function parseContext(context) {
	if (context === undefined || context === null) {
		context = {};
	}

	let $props = context.$props || {};
	let $slots = context.$slots || {};

	return {
		$props,
		$slots,
	}
}