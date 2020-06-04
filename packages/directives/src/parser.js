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
		directives[name](entity, entityDirectives[name])
	}
}