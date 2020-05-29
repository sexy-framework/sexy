let times = {};

export default function time(name)
{
	let now = (new Date).getTime();

	if(typeof times[name] === 'undefined') {
		times[name] = now;
		return times[name];
	}

	console.log(`[ tb ${name} ]`, now - times[name], 'ms');

	delete times[name];
}
