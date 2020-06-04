import { watch, computed, isObservable } from '@hawa/observable';

export function getNode(template, node, render) {
	if (render) {
		return template.content.cloneNode(true)
	}

	return node;
}

export function setRef($refs, node, name)
{
	if($refs[name] === undefined) {
		$refs[name] = node;
	} else {
		if(Array.isArray($refs[name])) {
			$refs[name].push(node);
		} else {
			$refs[name] = [$refs[name]].concat(node);
		}
	}
}

export function setKey($key, node, render)
{
	if($key === null) {
		return;
	}

	watch($key, () => {
		node.setAttribute('data-key', $key);
	}, render)
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
	let $customInit = context.$customInit || null;
	
	return {
		$props,
		$slots,
		$customInit,
		$refs: {},
	}
}