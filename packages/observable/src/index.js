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
		ob._observers.add(update);
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

	for(let ob of obs) {
		if(ob._observers) {
			ob._observers.add(value);
		}

		if(ob._deps) {
			for(let dep of ob._deps) {
				dep.add(value);
			}
		}
	}

	if(!skip) {
		value();
	}
}