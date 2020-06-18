import fs from 'fs';
import { ensureDirectoryExistence } from './utils';


export function getManifest(paths)
{
	let manifest = paths.rootBuild('build.json');

	try {
		return JSON.parse(fs.readFileSync(manifest, 'utf8'));
	} catch(err) {
		return {}
	}
}

export function createManifest(paths, data)
{
	let manifest = paths.rootBuild('build.json');

	ensureDirectoryExistence(manifest);

	fs.writeFileSync(manifest, JSON.stringify(data));
}
