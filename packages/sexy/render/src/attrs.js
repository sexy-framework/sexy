import { watch } from 'sexy-framework/observable';

export function attrArgToObj(args)
{
	let result = {};

	if(Array.isArray(args)) {
		for (var i = 0; i < args.length; i++) {
			result = Object.assign(result, attrArgToObj(args[i]));
		}
	} else if(typeof args === 'object') {
		result = args;
	}

	return result;
}

export function attrArgToString(args)
{
	if(typeof args === 'string') {
		return args.split(' ')
	}

	let result = [];
	// args = args.concat([]);
	if(Array.isArray(args)) {
		for (var i = 0; i < args.length; i++) {
			result = result.concat(attrArgToString(args[i]));
		}
	} else if(typeof args === 'object') {
		for(let key in args) {
			if(args[key]) {
				result.push(key);
			}
		}
	} else {
		result.push(args);
	}

	return result;
}


export function makeClass(node, value, render)
{
	let lastClassAdopted = [];

	if(!render) {
		lastClassAdopted = attrArgToString(value());
	}

	let cache;

	watch(value, (v) => {

		let tmp = node.classList;

		let toSet = attrArgToString(v);

		let cacheString = toSet.join(' ');

		if(cache !== undefined && cache === cacheString) {
			return;
		}

		let toRemove = lastClassAdopted.filter(x => !toSet.includes(x));

		for(let name of toSet) {
			node.classList.add(name);
		}

		for(let name of toRemove) {
			node.classList.remove(name);
		}

		lastClassAdopted = toSet;
		cache = cacheString;
	}, render);
}

export function makeStyles(node, value, render)
{
	watch(value, (v) => {
		let styles = attrArgToObj(v);
		for(let name in styles) {
			node.style[name] = styles[name];
		}
	}, render);
}


export function attrs(node, render, attrs)
{
	// console.log('start attr', node, render, attrs)
	for(let name in attrs)
	{
		let value = attrs[name];
		if(name === 'class') {
			makeClass(node, value, render);
		} else if(name === 'style') {
			makeStyles(node, value, render);
		} else {
			watch(value, (v) => {
				node.setAttribute(name, v);
			}, render);
		}
	}
}
