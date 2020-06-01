import { computed, isObservable } from '@hawa/observable';

export function getNode(template, node, render) {
	if (render) {
		return template.content.cloneNode(true)
	}

	return node;
}

export function getProp($props, name, seed)
{
	if($props[name] === undefined) {
		return () => {
			return seed;
		}
	}

	if(isObservable($props[name])) {
		return $props[name];
	} else {
		return () => {
			return $props[name];
		}
	}
	// return 
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