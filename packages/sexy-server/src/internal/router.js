import { APP_ROUTES } from './routes';
import navigo from 'navigo';
import { hydrate } from 'sexy-framework/render';

var router = new navigo();

router.start = function(root)
{
	for(let route in APP_ROUTES) {
		router.on(route, function (params, query) {
			console.time('hydrate');
			hydrate(APP_ROUTES[route], root)
			console.timeEnd('hydrate');
		})
	}

	router.resolve();
}

export {
	router,
};