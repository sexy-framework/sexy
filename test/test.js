import { root, observable, computed, subscribe } from '@hawa/observable';


let v = observable(1);

let v2 = computed(v, () => {
	return v() * 2;
})

// tracker ??
// transactions ??

subscribe([v, v2], () => {
	console.log('changed', v(), v2());
});

v(2);