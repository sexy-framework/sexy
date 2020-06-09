import { cleanup } from '@hawa/observable';

export function createHooks(hooks, id)
{
	if(!hooks.unmounted) {
		return;
	}
	
	cleanup(hooks.unmounted);
}
