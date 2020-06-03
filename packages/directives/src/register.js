import Model from './model';

export let RegisteredDirectives = new Map([
	['model', Model]
]);

export default function register(name, instance)
{
	RegisteredDirectives.add(name, instance);
}