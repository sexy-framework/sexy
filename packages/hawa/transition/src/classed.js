const cache = new Map();

function getDuration(node, activeClass, out)
{
	let cached = cache.get(activeClass);

	if(cached) {
		return cached;
	}

	let tmp = document.createElement('div');
	tmp.classList.add(activeClass)
	
	document.body.append(tmp)

	let duration = getComputedStyle(tmp).transitionDuration;

	tmp.remove();

	duration = parseFloat(duration.replace(/[^0-9\.]/g, '')) * 1000;
	
	cache.set(activeClass, duration);

	return duration;
}

export function classed(node, name, out = false) {
	let prefix = 'enter';

	if (out) {
		prefix = 'leave';
	}

	let toRemove = new Set();

	let activeClass = `${ name }-${ prefix }-active`;
	let startClass = `${ name }-${ prefix }`;
	let finishClass = `${ name }-${ prefix }-to`;

	let duration = getDuration(node, activeClass, out)

	node.classList.add(activeClass);
	node.classList.add(startClass);

	setTimeout(() => {
		node.classList.add(finishClass);
		node.classList.remove(startClass);
	}, 20);

	// cleanup
	setTimeout(() => {
		node.classList.remove(activeClass);
		node.classList.remove(finishClass);
	}, duration)

	return {
		duration
	}
}
