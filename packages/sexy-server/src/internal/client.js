import 'sexy-styles';

// Routes
import { Routes } from 'sexy-routes';
import { router } from './router';

// Client Render/Hydrate
import { render, hydrate, registerComponent } from 'sexy-framework/render';

// Load default components
import * as components from './components';
components.register();

// Layout system
import { clientLayout } from './layout';

const root = document.getElementById('_layout');

let isSSR = true;

function make(page, root)
{
	let fn = render;
	
	if(isSSR) {
		fn = hydrate;
	}

	isSSR = false;

	return clientLayout(fn, page, root, {
		router,
	})
}

router.notFound(function () {
	make(Routes['/error-404'](), root)
});

for(let route in Routes) {
	router.on(route, function (params, query) {
		make(Routes[route](), root)
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


