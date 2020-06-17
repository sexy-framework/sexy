import chokidar from 'chokidar';

export function watcher(path, callback)
{
	const watcher = chokidar.watch(path, {
		ignored: /(((^|[\/\\])\..)|node_modules|packages)/, // ignore dotfiles
	});
	
	let ready = false;

	watcher
		.on('ready', () => {
			ready = true;
			callback();
		})
		.on('all', (path) => { // internal
			if(ready) {
				callback();
			}
		});
}