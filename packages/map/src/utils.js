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


export function add(parent, value, endMark) {

	const fragOrNode = frag(value) || value;

	// If endMark is `null`, value will be added to the end of the list.
	parent.insertBefore(value, endMark && endMark.parentNode && endMark);

	return fragOrNode;
}
