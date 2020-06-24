import { subscribe, root } from 'sexy-framework/observable';
import { add, persistent, diffable, castNode } from '../utils.js';

export function createInitFragment(start, end)
{
	let nodes = [];

	while(start !== null && !start.isSameNode(end)) {
		nodes.push(start);
		start = start.nextSibling;
	};

	nodes.shift();

	let length = nodes.length;

	if (length < 2) return nodes[0];
	const _firstChild = nodes[0];
	const _lastChild = nodes[length - 1];
	return {
		nodeType: 111,
		_firstChild,
		_lastChild,
	};
}

export function getInitValue(args, render)
{
	if(render) {
		return null;
	}

	let index = null;

	for (var i = 0; i < args.length; i += 2) {
		let condition = args[i];
		let renderFn = args[i + 1];

		if (condition()) {
			index = i;
			break;
		}
	}

	return index;
}

export function cleanupFragment(parent, startMark, endMark)
{
	let cleanNodes = createInitFragment(startMark, endMark);
	parent.removeChild(diffable(cleanNodes, -1));
}

export function statement(node, render, deps, ...args)
{
	// let 
	let parent;
	let endMark, startMark;
	let placeholder;

	function cleanup() {
		return cleanupFragment(parent, startMark, endMark);
	}
	
	if(render) {
		placeholder = document.createComment('');

		parent = document.createDocumentFragment();
		
		startMark = add(parent, '');
		placeholder = add(parent, placeholder);
		endMark = add(parent, '');

		node.replaceWith(parent);

		node = placeholder;

		parent = endMark.parentNode;
	} else {
		parent = node.parentNode;
		startMark = castNode('');

		parent.insertBefore(startMark, node);
	}

	let lastConditionIndex = getInitValue(args, render);

	let isFirstCall = true;

	// obs trackers
	const disposers = new Map();
	const toRemove = new Set();
	// .clear();

	function dispose(item) {
		let disposer = disposers.get(item);
		if (disposer) {
			disposer(cleanup);
			disposers.delete(item);
		}
	}

	subscribe(deps, () => {

		toRemove.forEach(dispose);

		let n = document.createComment('');
		let currentConditionIndex = null;

		for (var i = 0; i < args.length; i += 2) {
			let condition = args[i];
			let renderFn = args[i + 1];

			if (condition()) {
				n = root(dispose => {
					toRemove.add(i);
					disposers.set(i, dispose);
					return renderFn(startMark.nextSibling, lastConditionIndex !== i);
				});

				if (n.nodeType === 11) n = persistent(n) || n;

				currentConditionIndex = i;

				break;
			}
		}

		if(isFirstCall && !render) {
			endMark = castNode('');

			if(lastConditionIndex === null) {
				n = node;
			}

			// console.log(lastConditionIndex, n, endMark)
			n.after(endMark);

			isFirstCall = false;

			return;
		}

		let hasRendered = currentConditionIndex !== lastConditionIndex;

		lastConditionIndex = currentConditionIndex;

		isFirstCall = false;

		if(!hasRendered) {
			return;
		}

		if(placeholder) {
			parent.removeChild(placeholder);
			placeholder = null;
		}
		// add new nodes
		parent.insertBefore(diffable(n, 1), endMark);
	});

	return endMark;
}
