// import APP_ROUTES from './routes';
import navigo from 'navigo';
import { hydrate } from 'sexy-framework/render';

var router = new navigo();


const APP_ROUTES = {
	'/': import(/* webpackChunkName: "page.index" */ '/Applications/MAMP/htdocs/hawa/pages/index.sexy')
}


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