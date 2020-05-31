# HAWA

## What?

HAWA - is a Javascript template compiler and code analyser that compile template to DOM expressions and create variable (observable, computed) dependecies on compiler time.

So its like Svelte, but much faster because of
1. No reactivity libs (all deps are made by code analyser)
2. No runtime (i mean framework doesnt work in runtime, only on compilation step)
3. Partial hydration (even for loops and conditional statements)

Reactive libs and frameworks slow because of:
- VDOM
- They works in runtime
- Reactivity

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
