function prepareHTML(html)
{
	return html.replace(/\t/g, ' ').replace(/\s\s+/g, ' ').trim();
}

export function prepare(blocks, html)
{
	for(let key in blocks) {
		let regexp = new RegExp(`<${key}.*>((.|\\s)*)<\\/${key}>`, 'g');
		html = html.replace(regexp, '');
	}

	html = html
		// if
		.replace(/@if\((.*)\)/g, '<expr type="statement"><expr type="program" value="$1">')
		.replace(/@elseif\((.*)\)/g, '</expr><expr type="program" value="$1">')
		.replace(/@else/g, '</expr><expr type="program" value="true">')
		.replace(/@endif/g, '</expr></expr>')
		// each
		.replace(/@each\((.*)\)/g, '<expr type="each" value="$1">')
		.replace(/@endeach/g, '</expr>')

	return prepareHTML(html);
}