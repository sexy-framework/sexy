export function _statement$(node, ...args) {
	let returnNode = false;

	for (var i = 0; i < args.length; i += 2) {
		if (args[i]) {
			returnNode = args[i + 1](node);
			break;
		}
	}

	if (returnNode === false) {
		return node;
	}

	node.replaceWith(returnNode);

	return returnNode;
}