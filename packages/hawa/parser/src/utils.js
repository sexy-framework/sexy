const HTMLTags = [
	"!doctype", "a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio",
	"b", "base", "basefont", "bb", "bdo", "big", "blockquote", "body", "br", "button", "canvas",
	"caption", "center", "cite", "code", "col", "colgroup", "command", "datagrid", "datalist", "dd",
	"del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "eventsource", "fieldset",
	"figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1> to <h6", "head", "header",
	"hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "isindex", "kbd", "keygen", "label",
	"legend", "li", "link", "map", "mark", "menu", "meta", "meter", "nav", "noframes", "noscript",
	"object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt",
	"ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong",
	"style", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title",
	"tr", "track", "tt", "u", "ul", "var", "video", "wbr", "template"
];

export function isComponent(name)
{
	return !HTMLTags.includes(name);
}

export function makeMap(str, expectsLowerCase)
{
	var map = Object.create(null);
	var list = str.split(',');

	for (var i = 0; i < list.length; i++) {
		map[list[i]] = true;
	}

	return expectsLowerCase ?
		function(val) { return map[val.toLowerCase()]; } :
		function(val) { return map[val]; }
}
