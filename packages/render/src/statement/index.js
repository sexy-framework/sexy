import { subscribe } from '@hawa/observable';
import { add, persistent, diffable } from '../utils.js';

export function statement(node, render, deps, ...args)
{	
	let parent;
	let endMark;
	
	if(render) {
		parent = document.createDocumentFragment();
		endMark = add(parent, '');

		node.replaceWith(parent);
	}

	let lastConditionIndex = null;

	// node = diffable(node, -1);
	let lastNode = null;

	subscribe(deps, () => {
		let parent = endMark.parentNode;

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

		let hasRendered = currentConditionIndex !== lastConditionIndex;

		lastConditionIndex = currentConditionIndex;

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