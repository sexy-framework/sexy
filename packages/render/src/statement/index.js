import { subscribe } from '@hawa/observable';
import { createTracker } from '@hawa/tracker';
import { add, persistent, diffable, castNode } from '../utils.js';

export function createInitFragment(start, end)
{
	let nodes = [];

	while(!start.isSameNode(end)) {
		nodes.push(start);
		start = start.nextSibling;
	} ;

	// nodes.push(end);
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

export function statement(node, render, deps, ...args)
{
	// let 
	let parent;
	let endMark;
	
	if(render) {
		parent = document.createDocumentFragment();
		endMark = add(parent, '');

		node.replaceWith(parent);

		parent = endMark.parentNode;
	} else {
		parent = node.parentNode;
	}

	let lastConditionIndex = getInitValue(args, render);

	// node = diffable(node, -1);
	let lastNode = null;
	let isFirstCall = true;

	const unsubscribe = subscribe(deps, () => {
		let n = document.createComment('');
		let currentConditionIndex = null;

		for (var i = 0; i < args.length; i += 2) {
			let condition = args[i];
			let renderFn = args[i + 1];

			if (condition()) {
				n = renderFn(node, lastConditionIndex !== i);

				if (n.nodeType === 11) n = persistent(n) || n;

				currentConditionIndex = i;

				break;
			}
		}

		if(isFirstCall && !render) {
			endMark = castNode('');

			// if no wasn't rendered then repalce placeholder with real placehodler
			if(lastConditionIndex === null) {
				n = node;
			}

			n.after(endMark);

			lastNode = createInitFragment(node, endMark);
			isFirstCall = false;

			// console.warn(node, lastNode, endMark, parent.childNodes);

			return;
			// console.warn(n, diffable(n, 1).lastChild);
		}

		let hasRendered = currentConditionIndex !== lastConditionIndex;

		// fix add comment placeholder on render 
		if(isFirstCall && render) {
			hasRendered = true;
		}

		lastConditionIndex = currentConditionIndex;

		isFirstCall = false;

		if(!hasRendered) {
			return;
		}

		// node
		if(lastNode) {
			parent.removeChild(diffable(lastNode, -1));
		}

		lastNode = n;

		parent.insertBefore(diffable(n, 1), endMark);
	});

	return endMark;
}