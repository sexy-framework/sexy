export function loadComponent(component, node, render, options = {})
{
	let instance = new component(options, render ? false : node);

	let componentNode = instance.$node;

	if(render) {

		let mark = componentNode.lastChild;
		
		node.replaceWith(componentNode);

		componentNode = mark;
	}

	return {
		$node: componentNode,
		$hooks: instance.$hooks,
	};
}