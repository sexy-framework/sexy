
export function events(node, render, options) {
	for (let key in options) {
		node.addEventListener(key, options[key])
	}
}