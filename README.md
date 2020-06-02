# HAWA

## What?

HAWA - is a Javascript template compiler and code analyser that compile template to DOM expressions and create variable (observable, computed) dependecies on compiler time.

So its like Svelte, but much faster because of
1. No reactivity libs (all deps are made by code analyser)
2. No runtime (i mean framework doesnt work in runtime, only on compilation step)
3. Partial hydration (even for loops and conditional statements)

## Performance

Performance is a main key of HAWA.
1. Faster in x6 times to hydrate dynamic components then NuxtJS
2. Faster in x3.5 times to hydrate static components then NuxtJS
2. Faster in x3 times to hydrate components with events then NuxtJS
2. Faster in x10 times to hydrate components then Svelte

Best choice for mobile web apps development.

Benchmark was made with 10 000 components with loop function. (Without loop its much more faster).

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
