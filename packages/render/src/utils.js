export function frag(value) {
	const { childNodes } = value;
	if (!childNodes || value.nodeType !== 11) return;
	if (childNodes.length < 2) {
		return childNodes[0];
	}

	// For a fragment of 2 elements or more add a startMark. This is required
	// for multiple nested conditional computeds that return fragments.
	const _startMark = add(value, '', childNodes[0]);

	return {
		_startMark
	};
}


export function add(parent, value, endMark = null) {
	value = castNode(value);

	const fragOrNode = frag(value) || value;

	// If endMark is `null`, value will be added to the end of the list.
	parent.insertBefore(value, endMark && endMark.parentNode && endMark);

	return fragOrNode;
}

export function castNode(value) {
	if (typeof value === 'string') {
		return document.createTextNode(value);
	}
	if (!(value instanceof Node)) {
		// Passing an empty array creates a DocumentFragment.
		return document.createDocumentFragment([value]);
	}
	return value;
}


export function removeNodes(parent, startNode, endMark) {
	while (startNode && startNode !== endMark) {
		const n = startNode.nextSibling;
		// Is needed in case the child was pulled out the parent before clearing.
		if (parent === startNode.parentNode) {
			parent.removeChild(startNode);
		}
		startNode = n;
	}
}

const nodeType = 111;


export const diffable = (node, operation) =>
	node.nodeType === nodeType ?
	1 / operation < 0 ?
	operation ?
	removeNodes(
		node._firstChild.parentNode,
		node._firstChild.nextSibling,
		node._lastChild.nextSibling
	) || node._firstChild :
	node._lastChild :
	operation ?
	node._valueOf() :
	node._firstChild :
	node;

export const persistent = (fragment) => {
	const { childNodes } = fragment;
	const { length } = childNodes;
	// If the fragment has no content
	// it should return undefined and break
	if (length < 2) return childNodes[0];
	const nodes = Array.from(childNodes);
	const _firstChild = nodes[0];
	const _lastChild = nodes[length - 1];
	return {
		nodeType,
		_firstChild,
		_lastChild,
		_valueOf() {
			if (childNodes.length !== length) {
				let i = 0;
				while (i < length) fragment.appendChild(nodes[i++]);
			}
			return fragment;
		},
	};
};
