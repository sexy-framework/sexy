import { diff } from './diff.js';
import { add, persistent, diffable } from './utils.js';
import { observable, computed, subscribe, value } from '@hawa/observable';
/**
 * Map over a list of unique items that create DOM nodes.
 *
 * No duplicates in the list of items is a hard requirement, the diffing
 * algorithm will not work with duplicate values. See `./unique.js`.
 *
 * @param  {Function} items - Function or observable that creates a list.
 * @param  {Function} expr
 * @param {boolean} [cleaning]
 * @return {DocumentFragment}
 */

export function map(bindNode, items, keyExpr, expr, render) 
{
	// const { root, subscribe, sample, cleanup } = api;

	// Disable cleaning for templates by default.
	let cleaning = true;//!expr.$t;

	let parent = bindNode;

	// if(render) {
		parent = bindNode.parentNode;//document.createDocumentFragment();
	// }?

	let endMarkNode = bindNode;//add(parent, '');

	const disposers = new Map();
	const nodes = new Map();
	const toRemove = new Set();
	const defaultA = [];
	// console.log(render);
	if(!render) {

		let _items = value(items);
		let node = bindNode;

		for (let key in _items) {
			let item = _items[key];
			let itemKey = keyExpr(item, key);
			
			if(node) {
				if(node.getAttribute('data-key') == itemKey) {
					node = expr(node, false, keyExpr, item, itemKey)
					node = node.nextSibling;
				}
			}

			defaultA[itemKey] = item;
			addNode(item, itemKey, 1, node);
		}

		endMarkNode = node;
		console.log(endMarkNode)
	
	} else {
		// bindNode.remove();
	}

	const endMark = endMarkNode;

	const unsubscribe = subscribe(items, a => {
		let b = value(items);
		// return computed(() => {
		toRemove.clear();

		// Array.from to make a copy of the current list.
		const content = Array.from(
			diff(endMark.parentNode, a || defaultA, b, keyExpr, addNode, endMark)
		);

		// for (var i = 0; i < context._children.length; i++) {
		// 	console.log(i, context._children[i].hid, context._children[i]._state.s1(), context._children[i]._props.pt)
		// }
		// console.log(toRemove);
		// toRemove.forEach(dispose);
		return content;
		// });
	});

	function addNode(item, key, i, el = null) {
		if (item == null) return;

		let nodeKey = keyExpr(item, key);

		let n = nodes.get(nodeKey);
		if (i === 1) {
			toRemove.delete(item);

			if (!n) {
				n = (el ? el : expr(bindNode, render, keyExpr, item, key));
				if (n.nodeType === 11) n = persistent(n) || n;
				nodes.set(nodeKey, n);
			}
		} else if (i === -1) {
			toRemove.add(nodeKey);
		}

		return diffable(n, i);
	}

	// function disposeAll() {
	// 	disposers.forEach(d => d());
	// 	disposers.clear();
	// 	nodes.clear();
	// 	toRemove.clear();
	// }

	// function dispose(item) {
	// 	let disposer = disposers.get(item);
	// 	if (disposer) {
	// 		disposer();
	// 		disposers.delete(item);
	// 	}
	// 	nodes.delete(item);
	// }

	return parent;
}
