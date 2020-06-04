// import { RegisteredDirectives } from '@hawa/directives'

export function directive($hooks, directive, node, options, value, render)
{
	let unmounted = directive(node, options, value, render)

	$hooks.unmounted.push(
		unmounted
	);
}
