import { diff } from './diff.js';
import { add, persistent, diffable, manualPersistent } from '../utils.js';
import { subscribe, value, root, getRoot } from 'sexy-framework/observable';
import {  getRoot as transRoot } from 'sexy-framework/transition';
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
	let curTracker = getRoot();//!expr.$t;

	let parent;
	let endMark;

	const disposers = new Map();
	const nodes = new Map();
	const toRemove = new Set();
	const defaultA = [];

	let placeholder;

	// hydration prepare 
	if(render) {
		parent = document.createDocumentFragment();
		endMark = add(parent, '');

		bindNode.replaceWith(parent);
	} else {
		let _items = value(items);
		let node = bindNode;
		let lastNode = null;

		if(node.nodeType === 8) {
			placeholder = node;
		}
		// return;
		for (let key in _items) {
			let item = _items[key];
			let itemKey = keyExpr(item, key);
			let lastHydratedNode = null;

			if(node && node.getAttribute) {
				if(node.getAttribute('data-key') == itemKey) {

					lastHydratedNode = root(disposal => {
						disposers.set(itemKey, disposal);
						return expr(node, false, itemKey, item, key);
					}, curTracker);

					let n = manualPersistent(node, lastHydratedNode)

					defaultA[key] = item;
					nodes.set(itemKey, n);

					// console.warn('[hydr]', itemKey, n)

					node = lastHydratedNode.nextSibling;
					
					lastNode = lastHydratedNode;
				}
			}
		}

		endMark = document.createTextNode('');

		if(lastNode === null) {
			render = true;
			bindNode.after(endMark);
		} else {
			lastNode.after(endMark);
		}
	}
	
	const unsubscribe = subscribe(items, a => {

		let b = value(items);

		toRemove.clear();
		// Array.from to make a copy of the current list.
		const content = Array.from(
			diff(endMark.parentNode, a || defaultA, b, keyExpr, addNode, endMark)
		);

		toRemove.forEach(dispose);

		// set placeholder
		if(b.length === 0 && !placeholder) {
			placeholder = document.createComment('');
			endMark.parentNode.insertBefore(placeholder, endMark)
		} else if(placeholder) {
			endMark.parentNode.removeChild(placeholder)
			placeholder = null;
		}

		return content;
		// });
	}, !render);

	// setTimeout(() => {
	// 	console.log('[unsubscribe]', unsubscribe);
	// 	unsubscribe();
	// }, 2000)

	// if(render) {
	// 	bindNode.replaceWith(parent);
	// }

	// disposeAll();

	function addNode(item, key, i, parent = null) {
		if (item == null) return;

		let nodeKey = keyExpr(item, key);

		let n = nodes.get(nodeKey);
		if (i === 1) {
			toRemove.delete(item);

			if (!n) {
				n = root(disposal => {
					disposers.set(nodeKey, disposal);
					return expr(null, true, nodeKey, item, key);
				}, curTracker);

				if (n.nodeType === 11) n = persistent(n) || n;

				nodes.set(nodeKey, n);
				
			}
		} else if (i === -1) {
			toRemove.add(nodeKey);
			
			let disposer = disposers.get(nodeKey);

			if(disposer) {
				disposers.set(nodeKey,
					disposer.bind(null, () => {
						endMark.parentNode.removeChild(diffable(n, -1));
					})
				)
			}

			return;
		}

		return diffable(n, i);
	}

	// cleanup(disposeAll);

	// function disposeAll() {
	// 	disposers.forEach(d => d());
	// 	disposers.clear();
	// 	nodes.clear();
	// 	toRemove.clear();
	// }

	function dispose(item) {
		let disposer = disposers.get(item);
		if (disposer) {
			disposer();
			disposers.delete(item);
		}
		nodes.delete(item);
	}

	return endMark;
}
