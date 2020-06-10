import { value } from 'hawa/observable';


export function html(node, options, html, render)
{
	if(render) {
		node.innerHTML = value(html);
	}

	return () => {
		// node.removeEventListener('input', updateValue);
	}
}
