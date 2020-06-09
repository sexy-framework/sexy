import { cleanup } from '@hawa/observable';
export { fade } from './fade';

export function transition(node, t_in, t_in_opts, t_out, t_out_opts)
{
	if(t_in) {
		transition_in(t_in, node)
	}

	if(t_out) {
		cleanup(
			transition_out.bind(null, t_out, node)
		);
	}
}

function transition_in(transition, node)
{
	// console.log('animate_in', node);
	node.style.opacity = 0;
	node.style.transitionProperty = 'opacity';
	node.style.transitionTimingFunction = 'ease-in';
	node.style.transitionDuration = '400ms';

	setTimeout(() => {
		node.style.opacity = 1;
	}, 50)
	// tracker.children.add(transition);

}

function transition_out(transition, node)
{
	// console.log('animate_out', node);

	node.style.opacity = 1;
	node.style.transitionProperty = 'opacity';
	node.style.transitionTimingFunction = 'ease-in';
	node.style.transitionDuration = '400ms';

	setTimeout(() => {
		node.style.opacity = 0;
	}, 0)

	return {
		duration: 400
	}
	// tracker.children.add(transition);
}

