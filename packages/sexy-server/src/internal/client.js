import APP_ROUTES from 'sexy-routes';
import navigo from 'navigo';
import { hydrate } from 'sexy-framework/render';

var router = new navigo();

const root = document.getElementById('_layout');

for(let route in APP_ROUTES) {
	router.on(route, function (params, query) {
		// console.time('hydrate');
		hydrate(APP_ROUTES[route](), root)
		// console.timeEnd('hydrate');
	})
}

router.on('*', function (query) {
	hydrate(APP_ROUTES['/error-404'](), root);
});

router.resolve();

