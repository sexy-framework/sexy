import navigo from 'navigo';

// if(window.)
const navigoRouter = new navigo(
	window.location.protocol + "//" + window.location.host,
	false
);

navigoRouter.getPathname = function() {
	return navigoRouter.lastRouteResolved().url;
}

export const router = navigoRouter;