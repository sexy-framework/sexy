import routes from '../routes.js';
import navigo from 'navigo';
import { hydrate } from 'sexy/render';

var router = new navigo();

console.log(routes);

router.start = function(root)
{
	for(let item of routes) {
		router.on(item.route, function (params, query) {
			console.time('hydrate');
			hydrate(item.component(), root)
			console.timeEnd('hydrate');
		})
	}

	router.resolve();
}

export {
	router,
};


// router.notFound(function (query) {
//   // ...
// });
