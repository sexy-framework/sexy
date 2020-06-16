# Sexy framework

Sexy - is a Javascript template compiler and code analyser that compile template to DOM expressions and create variable (observable, computed) dependecies on compiler time.

So its like Svelte, but much faster because of
1. No reactivity libs (all deps are made by code analyser)
2. No runtime (i mean framework doesnt work in runtime, only on compilation step)
3. Partial hydration (even for loops and conditional statements)

Thanks SolidJS (dom expressions) and Sinuous (fast looping) for their work that helped to make max performance.

## Benefits
- **Small.** hello world at `3.73kB` gzip.
- **Fast.** No reactivity libs, No runtime work
- **Partial hydration.** Hydrate only dynamic and statefull parts of application
- **Truly reactive.** automatically derived from the app state.
- **Tips & Tricks.** Slots, Loops, Statements and Props as we get used to

## Performance

Performance is a main key of Sexy framework. (syntethic tests)
1. Faster in x4.5 times to hydrate dynamic components then NuxtJS
2. Faster in x3.5 times to hydrate static components then NuxtJS
2. Faster in x3 times to hydrate components with events then NuxtJS
2. Faster in x10 times to hydrate components then Svelte (in real test FID better in 3 times)

Best choice for mobile web apps development.

Benchmark was made with 10 000 components with loop function. (Without loop its much more faster).

## Features

- [x] Single file components
- [x] Statements
- [x] Slots
- [x] Loops
- [x] Props
- [x] Hooks (mounted/unmounted)
- [x] Components auto import/naming
- [x] Directives (Plugins)
- [x] Two-way bindings
- [x] Animation (basic via class)
- [x] Lazy loading (there is bug with root subscriber)
- [x] Dependencies (SFC)
- [ ] Store (Vuex, Mobx...)
- [ ] SSR tool (fetching)
- [ ] Recursive components

Expression generation should be fixed and tested more

## Single file components

Syntax is similar to VueJs but loop and conditional statements has a bit different syntax
 
```vue
@if(expression)
<div :class="[var2]" :style="var1">
	<slot>Default slot text</slot>
</div>
@elseif(expression)
1
@else
2
@endif
```

Each with multiple nodes
```vue
@each((item, key) in items)
<template :key="key">
// code
</template>
@endeach
```

Each with signle nodes
```vue
@each((item, key) in items)
<div :key="key">
// code
</div>
@endeach
```

## Examples

Example with Loop, external component, (bind) (two-way data binding and directive), references and style blocks
```vue
<div>
	@each(item, key in items)
		<nav.container ref="test" :key="item.v" (bind)="vv" transition:classed="fade" lazy>
			test {{ item.v }}
		</nav.container>
	@endeach
	<!-- <input type="text" (bind)="vv" ref="input"> -->
	{{ vv }}
</div>

<script>
import { bind } from 'sexy-framework/directives'

let items = o([{
	v: 'a'
}, {
	v: 'b'
}]);

let vv = o('test');

function mounted()
{
	
}

function unmounted()
{
	
}
</script>


<style>
.red {
	color: rgb(0, 0, 0);
}
</style>
```


Example events, classes, styles
```vue
<div @click="change" :class="[classList, { active: tick === 1 }]" :style="{ fontSize: tick() + 'px' }">
	<slot></slot>
</div>

<script>
let tick = o(24);
let test = p(null);
let value = p(null);

let classList = () => {
	return {
		red: tick() % 2 == 0,
		green: tick() % 3 == 0,
		some: test() === null,
	}
}

function change()
{
	$emit('input', 2);
}

function mounted()
{
	console.log('container mounted');
}

function unmounted()
{
	console.log('container unmounted');	
}
</script>
```
