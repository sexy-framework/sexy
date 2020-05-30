import { diff } from './diff.js';
import { add } from './utils.js';

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
export function map(items, keyExpr, expr, beforeInit = null, parent = null) {
	const { root, subscribe, sample, cleanup } = api;

	// Disable cleaning for templates by default.
	let cleaning = true;//!expr.$t;

	if(parent === null) {
		parent = document.createDocumentFragment();
	}
	
	const endMark = add(parent, '');

	const disposers = new Map();
	const nodes = new Map();
	const toRemove = new Set();
	const defaultA = [];

	if(beforeInit) {
		beforeInit((item, key, n) => {
			defaultA[key] = item;
			node(item, key, 1, n);
		})
	}

	const unsubscribe = subscribe(a => {
		const b = items();
		return sample(() => {
			toRemove.clear();

			// Array.from to make a copy of the current list.
			const content = Array.from(
				diff(endMark.parentNode, a || defaultA, b, keyExpr, node, endMark)
			);

			// for (var i = 0; i < context._children.length; i++) {
			// 	console.log(i, context._children[i].hid, context._children[i]._state.s1(), context._children[i]._props.pt)
			// }
			toRemove.forEach(dispose);
			return content;
		});
	});

	cleanup(unsubscribe);
	cleanup(disposeAll);

	function node(item, key, i, el = null) {
		if (item == null) return;

		let nodeKey = keyExpr(item, key);

		let n = nodes.get(nodeKey);
		if (i === 1) {
			toRemove.delete(item);

			if (!n) {
				n = cleaning ?
					root(dispose => {
						disposers.set(nodeKey, dispose);
						return el ? el : expr(item, key);
					}) :
					(el ? el : expr(item, key));

				if (n.nodeType === 11) n = n.firstChild;

				nodes.set(nodeKey, n);

				// console.warn(`[create (${nodeKey})]`, n);
				if(n.$s) {
					n.$s.hook('mounted');
				}
				// context._children[key].hook('mounted');
			}
		} else if (i === -1) {
			// console.warn(`[remove (${nodeKey})]`, n, n.parentNode);
			if(n.$s) {
				n.$s.hook('unmounted');
			}

			toRemove.add(nodeKey);
			// context.removeChild(key);
		}

		return n;
	}

	function disposeAll() {
		disposers.forEach(d => d());
		disposers.clear();
		nodes.clear();
		toRemove.clear();
	}

	function dispose(item) {
		let disposer = disposers.get(item);
		if (disposer) {
			disposer();
			disposers.delete(item);
		}
		nodes.delete(item);
	}

	return parent;
}
