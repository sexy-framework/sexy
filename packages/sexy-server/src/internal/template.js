import * as Eta from 'eta'
import fs from 'fs'
import path from 'path'

let pageTemplate = null;
let manifest = null;

function getPageTemplate()
{
	if(pageTemplate === null) {
		pageTemplate = fs.readFileSync(
			path.resolve(templatePath, './template.html'),
			'utf8'
		);
	}

	return pageTemplate;
}

function getManifest()
{
	return JSON.parse(fs.readFileSync(
		path.resolve(buildPath, './build.json'),
		'utf8'
	));
}

function isScript(file)
{
	return file.substr(-3) === '.js';
}

function getScripts(files = [])
{
	return files.map(file => {
		if(isScript(file)) {
			return `<script src="/${ file }" defer></script>`;
		} else {
			return `<link rel="stylesheet" type="text/css" href="/${ file }">`;
		}
	}).join('');
}

function getPreload(chunks = [])
{
	let result = '';

	for(let chunk of chunks) {
		for(let file of chunk.preload) {
			result += `<link rel="preload" href="/${ file }" as="${ isScript(file) ? 'script' : 'style' }">`;
		}
	}

	return result;
}

export default function template(html, chunks)
{
	let manifest = getManifest();

	return Eta.render(getPageTemplate(), {
		base: getPreload(chunks),
		styles: '',
		head: '',
		scripts: getScripts(manifest.entrypoints),
		html,
	})
}