import 'sexy-styles';
import APP_ROUTES from 'sexy-routes';
import { router } from './router';
import { render, hydrate, registerComponent } from 'sexy-framework/render';
import * as components from './components';

components.register();

const root = document.getElementById('_layout');

let isSSR = true;

function make()
{
	let fn = render;
	
	if(isSSR) {
		fn = hydrate;
	}

	isSSR = false;

	return fn.apply(this, arguments);
}

router.notFound(function () {
	make(APP_ROUTES['/error-404'](), root)
});

for(let route in APP_ROUTES) {
	router.on(route, function (params, query) {
		make(APP_ROUTES[route](), root)
	});
}



// router.hooks({
// 	before(done, params) {
// 		// cleanup
// 		let toRemove = document.querySelectorAll('[data-to-remove]');

// 		console.log(toRemove)
// 		toRemove.forEach((node) => {
// 			node.parentNode.removeChild(node);
// 		});
		
// 		done();
// 	}
// });

router.resolve();


