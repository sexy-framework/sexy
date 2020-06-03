let Directives = new Map();


/*


	Directives can: 
	1. Precompile:
	- Modify options
	2. Compile 
	Custom function execute

	Register to unmounted hooks

	execDirective('model', $hooks, node, render);

 */


export function execDirective($hooks, node, name, value)
{
	if(!Directives.has(name)) {
		return;
	}

	let directive = Directives.get(name);

	console.log($hooks, node, name, value);

	$hooks.mounted.push(directive.mounted);
	$hooks.unmounted.push(directive.unmounted);
}

export function registerDirective(name, config)
{
	config = Object.assign({
		options() {

		},
		mounted(node, binding, isRender)
		{
			binding.options // v-model.stop.some.do
			binding.value // expression value
			binding.rawValue // value
		},
		unmounted()
		{
				
		},
	}, config);

	Directives.set(name, config);
}
