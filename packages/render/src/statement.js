import { subscribe } from '@hawa/observable';
import { findAndDispatchHook } from '@hawa/lifecycle';

export function getFirstCondition(args)
{
	let currentConditionIndex = null;

	for (var i = 0; i < args.length; i += 2) {
		let condition = args[i];
		let renderFn = args[i + 1];
		if (condition()) {
			currentConditionIndex = i;
			break;
		}
	}

	return currentConditionIndex;
}

export function getInitiatedNodes(start, end)
{
	let nodes = [];

	let current = start;
	do {
		let tmp = current.nextSibling;
		nodes.push(current);
		current = tmp;
	} while(current !== end && current !== null);

	nodes.push(end);

	if(nodes.length === 0) {
		return nodes[0];
	}

	return nodes;
}

export function append(start, node)
{
	start.after(node);
	// console.log('append', start, node)
}

export function clone(node)
{
	if(node.nodeType === 11) {
		let arr = [];//document.createDocumentFragment();
		
		for (let child of node.children) {
			arr.push(child);
		}

		return arr;
	}

	return node;
}

export function statement(node, render, deps, ...args)
{	
	// let startMark = document.createTextNode('');
	let endMark = document.createTextNode('');
	
	// node.before(startMark);
	

	let lastCondition = render ? null : getFirstCondition(args);

	if(render && lastCondition === null) {
		node.after(endMark);
	}

	let firstLoad = true;

	subscribe(deps, () => {
		let returnNode = document.createComment('');

		let hasConditionRendered = false;
		let currentConditionIndex = null;

		for (var i = 0; i < args.length; i += 2) {
			let condition = args[i];
			let renderFn = args[i + 1];
			if (condition()) {
				let shouldRender = lastCondition !== i;
				returnNode = renderFn(node, shouldRender);

				currentConditionIndex = i;

				if(shouldRender) {
					hasConditionRendered = true;
				}

				break;
			}
		}

		if(!render && firstLoad) {
			returnNode.after(endMark);
			node = getInitiatedNodes(node, returnNode);
		}

		firstLoad = false;

		let isSameCondition = currentConditionIndex  === lastCondition;

		lastCondition = currentConditionIndex;

		// If same condition that it was hydrated and we dont need to replace nodes
		if(isSameCondition) {
			return;
		}

		// console.warn('[statement]', node, returnNode);

		// cleanup(startMark, endMark);
		// append(startMark, returnNode);

		
		if(Array.isArray(node)) {
			for (var i = 0; i < node.length; i++) {
				let child = node[i];
				findAndDispatchHook(child, 'unmounted');

				if(i === 0) {
					child.replaceWith(returnNode);
				} else {
					child.remove();
				}
			}

			node = returnNode;
		} else {
			let tmp = clone(returnNode);
			findAndDispatchHook(node, 'unmounted');

			node.replaceWith(returnNode);
			node = tmp;
		}
	}, false);

	return endMark;
}