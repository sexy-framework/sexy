import { value, subscribe } from 'sexy/observable';


export function html(node, options, html, render)
{
	subscribe(html, () => {
		node.innerHTML = value(html);
	}, !render);

	return () => {
		// node.removeEventListener('input', updateValue);
	}
}
