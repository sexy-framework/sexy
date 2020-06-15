import routes from '../routes.js';
import navigo from 'navigo';
import { hydrate } from 'hawa/render';

const root = document.getElementById('_hawa');

var router = new navigo();

for(let item of routes) {
	router.on(item.route, function () {
		console.time('hydrate');
		hydrate(item.component(), root)
		console.timeEnd('hydrate');
		
		// console.log(root, item.component());
	})
}

router.resolve();