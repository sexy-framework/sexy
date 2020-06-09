const cache = new Map();

function getDuration(node, activeClass, out)
{
	let cached = cache.get(activeClass);

	if(cached) {
		return cached;
	}

	let tmp = document.createElement('div');

	document.body.append(tmp)

	let style = getComputedStyle(tmp);

	tmp.classList.add(activeClass)

	let duration = style.transitionDuration;

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

	let defaultClassName = node.className;
	let defaultActiveClassName = node.className + ' ' + activeClass;

	node.className = defaultActiveClassName + ' ' + startClass;

	setTimeout(() => {
		node.className = defaultActiveClassName + ' ' + finishClass;
	}, 20);

	// cleanup
	setTimeout(() => {
		node.className = defaultClassName;
	}, duration)

	return {
		duration
	}
}
