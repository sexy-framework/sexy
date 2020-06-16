export function call(fn, hooks, node, render)
{
	if(fn === null) {
		return;
	}

	return fn(hooks, node, render);
}
