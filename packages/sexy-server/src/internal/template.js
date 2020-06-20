import * as Eta from 'eta'
import fs from 'fs'
import path from 'path'

let pageTemplate = null;
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

export default function template(html)
{
	return Eta.render(getPageTemplate(), {
		base: '',
		styles: '',
		head: '',
		scripts: '',
		html,
	})
}