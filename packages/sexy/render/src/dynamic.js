import { loadComponent } from './load';
import { subscribe, root, value } from 'sexy-framework/observable';
import { add, persistent, diffable, castNode } from './utils.js';
import { cleanupFragment } from './statement';
import { call } from './call';
// import { isManualComponent }  from 'sexy-framework/parser';
// dynamic(computed, node)


// lastNode
// subscribe([tag], () => {
// 	if(isComponent(tag)) {
// 		loadComponent(tag, render);
// 	} else {
		
// 		if(render) {
// 			let e = createTag(tag);
// 			lastNode.replaceWith(e);
// 			lastNode = e;
// 		}

// 		lastNode.makeAttrs
// 	}
// });


export function getName(name = null)
{
	return `_component_${ name.replace(/[^0-9a-z]/gi, '') }$`;
}

export function hydrateTag(node, options, render)
{			
	for(let name in options.$props) {
		if(name === 'is') {
			continue;
		}
		node.setAttribute(name, options.$props[name]);
	}

	if(options.$slots) {
		if(options.$slots.default) {
			options.$slots.default(node, render);
		}
	}

	if(options.$customInit) {
		call(options.$customInit, [], node, render)
	}

	return node;
}

export function dynamic(tag, node, render, options)
{
	let parent;
	let endMark, startMark;

	function cleanup() {
		return cleanupFragment(parent, startMark, endMark);
	}

	if(render) {
		parent = document.createDocumentFragment();

		startMark = add(parent, '');
		let placeholder = add(parent, '1');
		endMark = add(parent, '');

		node.replaceWith(parent);
		
		parent = endMark.parentNode;

		// console.log(startMark, endMark, parent, node)

		// cleanup();
	} else {
		parent = node.parentNode;
		startMark = castNode('');

		parent.insertBefore(startMark, node);
	}

	// return;

	let disposer = null;

	function dispose() {
		if (disposer) {
			disposer();
			disposer = null;
		}
	}

	subscribe([tag], (prev) => {
		dispose();

		let shouldRender = !(!render && prev === null);
		let dynamicTag = value(tag);

		let isComponent = false;
		let n;

		if(shouldRender) {
			cleanup();
		}

		if(isComponent) {
			n = root(dispose => {
				disposer = dispose;
				return loadComponent(dynamicTag, dynamicTag, node, shouldRender, options);
			});
		} else {
			let dynamicNode;
			
			if(shouldRender) {
				dynamicNode = document.createElement(dynamicTag);
			} else {
				dynamicNode = node;
			}

			n = root(dispose => {
				disposer = dispose;
				return hydrateTag(dynamicNode, options, shouldRender)
			});
		}

		if(shouldRender) {
			// console.log('render', dynamicTag);
			parent.insertBefore(diffable(n, 1), endMark);
		} else {
			// console.log('hydrate', dynamicTag, n);
			endMark = castNode('');
			n.after(endMark);
		}

		return n;
	});

	return endMark;
}