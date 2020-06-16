import { root, observable, computed, subscribe } from '@sexy/observable';


let v = observable(1);

let v2 = computed(v, () => {
	return v() * 2;
})

// tracker ??
// transactions ??

let uns = subscribe(v2, () => {
	console.log('changed', v2());
});

v(2);

// uns();

v(3);

