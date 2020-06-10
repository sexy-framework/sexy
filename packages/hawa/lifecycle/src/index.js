import { cleanup } from 'hawa/observable';

export function createHooks(hooks)
{
	if(!hooks.unmounted) {
		return;
	}
	
	cleanup(hooks.unmounted);
}
