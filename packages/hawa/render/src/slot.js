export function slot($slots, name, node, render, callback) {
	if ($slots[name] === undefined) {
		callback(node);
		return;
	}

	let slotNodes = $slots[name]();
	// console.log(node,slotNodes, render)
	if(render) {
		node.innerHTML = '';
		node.appendChild(slotNodes);
	}
	
	return node;
}
