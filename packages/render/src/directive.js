import { cleanup } from '@hawa/observable';

export function directive($hooks, directive, node, options, value, render)
{
	let unmounted = directive(node, options, value, render)

	cleanup(unmounted);
}
