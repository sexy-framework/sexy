import { cleanup } from '@hawa/observable';
export { fade } from './fade';
export { classed } from './classed';

export function transition(node, t_in, t_in_opts, t_out, t_out_opts)
{
	if(t_in) {
		transition_in(node, t_in, t_in_opts)
	}

	if(t_out) {
		cleanup(
			transition_out.bind(null, node, t_out, t_out_opts)
		);
	}
}

function transition_in(node, transition, options)
{
	return transition(node, options);
}

function transition_out(node, transition, options)
{
	return transition(node, options, true);
}

