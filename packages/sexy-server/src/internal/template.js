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

function getScripts(files = [])
{
	return files.map(file => {
		return `<script src="/${ file }" defer></script>`;
	}).join('');
}

export default function template(html)
{
	let manifest = getManifest();

	return Eta.render(getPageTemplate(), {
		base: '',
		styles: '',
		head: '',
		scripts: getScripts(manifest.entrypoints),
		html,
	})
}