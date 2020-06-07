import {
	dispatchHook,
} from '@hawa/lifecycle'

export function loadComponent(component, node, render, options = {})
{
	let c = component(options, render ? false : node);

	let componentNode = c.node;

	if(render) {

		let mark = componentNode.lastChild;
		
		node.replaceWith(componentNode);

		componentNode = mark;
	}

	if(c.hooks.mounted) {
		c.hooks.mounted();
	}
	// dispatchHook(c.id, 'mounted');

	return componentNode;
}