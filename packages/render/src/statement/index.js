import { subscribe, root } from '@hawa/observable';
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

export function statement(node, render, deps, ...args)
{
	// let 
	let parent;
	let endMark, startMark;
	
	if(render) {
		let placeholder = document.createComment('');

		parent = document.createDocumentFragment();
		

		startMark = add(parent, '');
		placeholder = add(parent, placeholder);
		endMark = add(parent, '');

		node.replaceWith(parent);

		node = placeholder;
		
		parent = endMark.parentNode;
	} else {
		parent = node.parentNode;

		startMark = document.createTextNode('');

		parent.insertBefore(startMark, node);
	}

	let lastConditionIndex = getInitValue(args, render);

	// node = diffable(node, -1);
	let isFirstCall = true;

	// obs trackers
	let disposers = new Map();

	function disposeAll() {
		disposers.forEach(d => d());
		disposers.clear();
	}

	subscribe(deps, () => {

		disposeAll();

		let n = document.createComment('');
		let currentConditionIndex = null;

		for (var i = 0; i < args.length; i += 2) {
			let condition = args[i];
			let renderFn = args[i + 1];

			if (condition()) {
				n = root(dispose => {
					disposers.set(i, dispose);
					return renderFn(node, lastConditionIndex !== i);
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

			n.after(endMark);

			isFirstCall = false;
			lastTracker = curTracker;

			return;
		}

		let hasRendered = currentConditionIndex !== lastConditionIndex;

		lastConditionIndex = currentConditionIndex;

		isFirstCall = false;

		if(!hasRendered) {
			return;
		}

		let cleanNodes = createInitFragment(startMark, endMark);
		parent.removeChild(diffable(cleanNodes, -1));

		parent.insertBefore(diffable(n, 1), endMark);
	});

	return endMark;
}