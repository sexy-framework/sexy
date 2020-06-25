import { bind } from './parser/index';

const directives = {
	bind,
}

export function parser(entity)
{
	let entityDirectives = {};

	if(entity.option && entity.option.directives) {
		entityDirectives = entity.option.directives;
	}

	for(let name in entityDirectives) {
		if(directives[name]) {
			directives[name](entity, entityDirectives[name])
		} else {
			// console.warn(`There is no parser modifier for directive '${ name }' `)
		}
	}
}
