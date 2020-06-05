let tracking;

export function value(value)
{
	if(value.$o) {
		return value();
	} else {
		return value;
	}
}

export function observable(value)
{
	function data(nextValue)
	{
		if (arguments.length === 0) {
			return value;
		}

		value = nextValue;

		data._observers.forEach(observer => { observer._fresh = false; });
		data._observers.forEach(observer => observer());

		return value;
	}

	data._observers = new Set();
	data.$o = true;

	return data;
}


export function computed(obs, value)
{
	obs = [].concat(obs);

	for(let ob of obs) {
		if(ob.$o !== undefined) {
			ob._observers.add(update);
		}
	}

	function data()
	{
		if(!update._fresh) {
			update();
		}

		return value();
	}

	function update()
	{
		update._fresh = true;

		data._observers.forEach(observer => observer());

		return value;
	}

	data._observers = new Set();
	data.$o = true;

	update();

	return data;
}

export function subscribe(obs, value, skip = false)
{
	obs = [].concat(obs);

	// change subscribe function to last value memorize
	let lastValue = null;

	let fn = () => {
		lastValue = value(lastValue);
	}

	// Add subscribe to observers of observables
	for(let ob of obs) {
		if(ob._observers) {
			ob._observers.add(fn);
		}
	}

	// Call subscribe if not skipping 
	if(!skip) {
		fn();
	}

	// unsubscribe function
	return () => {
		for(let ob of obs) {
			if(ob._observers) {
				ob._observers.delete(fn);
			}
		}
	}
}

// Is property observable 
export function isObservable(prop)
{
	if(prop === undefined) {
		return false;
	}

	return prop.$o !== undefined || typeof prop === 'function';
}

/**
 * Watch property
 */
export function watch(prop, fn, render = true)
{
	if(!isObservable(prop)) {
		if(render) {
			fn(prop);
		}
		return;
	}


	subscribe(prop, () => {
		fn(prop());
	}, !render);
}


export function cleanup(fn)
{

}