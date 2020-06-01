export function loadComponent(component, node, render, options = {})
{
	let componentNode = component(options, render ? false : node);

	if(render) {

		let mark = componentNode.lastChild;
		
		node.replaceWith(componentNode);

		return mark;
	}

	return componentNode;
}