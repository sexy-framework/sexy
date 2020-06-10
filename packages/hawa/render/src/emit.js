export function emit(node)
{
	return (name, ...args) => {
		var event = new CustomEvent(name, {
			detail: args
		});

		node.dispatchEvent(event);
	}
}
