import { subscribe } from '@hawa/observable';

export function getFirstCondition()
{
}

export function statement(node, deps, ...args)
{	
	let endMark = document.createTextNode('');
	
	node.after(endMark);

	let lastCondition = null;

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

		let isSameCondition = currentConditionIndex  === lastCondition;

		lastCondition = currentConditionIndex;

		// If same condition that it was hydrated and we dont need to replace nodes
		if(isSameCondition) {
			return;
		}

		if(node.nodeType === 11) {
			for (var i = 0; i < node.childNodes.length; i++) {
				let child = node.childNodes[i];
				if(i === 0) {
					child.replaceWith(returnNode);
				} else {
					child.remove();
				}
			}
		} else {
			node.replaceWith(returnNode);
		}

		// console.log('replace', node, 'with', returnNode);
	
		node = returnNode;
	}, false);

	return endMark;
}