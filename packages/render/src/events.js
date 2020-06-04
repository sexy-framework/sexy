
export function events(node, options) {
	for (let key in options) {
		node.addEventListener(key, options[key])
	}
}