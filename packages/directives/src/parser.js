import { RegisteredDirectives } from './register';

export function parser(entity)
{
	RegisteredDirectives.forEach(directive => directive.parser(entity));
}