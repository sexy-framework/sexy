export function slot($slots, name, node, callback) {
	if ($slots[name] === undefined) {
		callback(node);
		return;
	}

	node.innerHTML = $slots[name];

	return node;
}