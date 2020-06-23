export function slot($slots, name, node, render, callback) {
	if ($slots[name] === undefined) {
		callback(node);
		return;
	}

	let slotNodes = $slots[name](node, render);
	// console.log(node,slotNodes, render)
	// if(render) {
	// 	node.innerHTML = '';
	// 	node.appendChild(slotNodes);
	// }
	
	return node;
}

export function slotReplaceTemplate(node, template, render)
{
	if(render) {
		node.replaceWith(template.content)
	}
}