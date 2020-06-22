export function call(fns, hooks, node, render)
{
	// if node is comment then dont use init, use it on root render component
	if(node.nodeType === 8) {
		return;
	}

	for(let fn of fns) {
		if(typeof fn === 'function') {
			fn(hooks, node, render);
		}
	}

	// return fn(hooks, node, render);
}
