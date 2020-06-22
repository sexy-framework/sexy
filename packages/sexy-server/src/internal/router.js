import navigo from 'navigo';

// if(window.)

export const router = new navigo(
	window.location.protocol + "//" + window.location.host,
	false
);
