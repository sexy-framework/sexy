import { prepare } from './prepare';
import { isComponent } from './utils';

import { Expression, Text, Node, Slot, Component, Dynamic } from './types';

import { Parser as HTMLParser } from 'htmlparser2';

export function parseAttrs(str)
{
	let attrs = {};

	str.trim().replace(/([^\s]*)=["'](.*?)["']|([\w\-]+)/g, function(src2, name, value) {
        if (!src2) return;
        name = name || src2;
        value = value || true;
        attrs[name] = value;
    });

	return attrs;
}

export function parseBlocks(blocks, html)
{
	let res = {};

	for(let key in blocks) {
		res[key] = null;

		let regexp = new RegExp(`<${key}(.*)>((.|\\s)*)<\\/${key}>`, 'g');
		let matches = regexp.exec(html);
		
		if(matches) {

			res[key] = {
				options: Object.assign(blocks[key], parseAttrs(matches[1])),
				source: matches[2],
			}
		}

		html = html.replace(regexp, '');
	}

	res.html = html;

	return res;
}

export function parse(html)
{
	// get additional blocks e.g. script, style, doc
	let blocks = parseBlocks({
		script: {},
		style: {
			lang: 'css',
		},
	}, html);

	// clean up html and replace expression with tag-expression
	html = prepare(blocks.html);

	// Parse TAGs
	let stack = [
		new Expression({ type: 'program' })
	];

	function currentStackNode()
	{
		return stack[stack.length - 1];
	}

	const parse = new HTMLParser({
		
		onopentag(name, attrs)
		{
			let parent = currentStackNode();
			let entity;

			if(name === 'expr') {
				entity = new Expression(attrs);
			} else if(name === 'slot') {
				entity = new Slot(attrs);
			} else if(name === 'dynamic') {
				entity = new Dynamic(attrs);
			} else if (isComponent(name)) {
				entity = new Component(name, attrs);
			} else {
				entity = new Node(name, attrs);
			}

			if(parent) {
				parent.addChild(entity);
			}

			stack.push(entity);
		},

		ontext(text)
		{
			let parent = currentStackNode();

			text = text.trim();

			if(text !== '' && parent) {
				let node = new Text(text);
				if(parent) {
					parent.addChild(node);
				}
	    	}
	    },

		onclosetag(name)
		{
			let removed = stack.pop();
	    }

	}, {
		decodeEntities: true,
		lowerCaseTags: false,
	});
	
	parse.write(html);
	parse.end();

	blocks.template = stack[0];
	// console.log(blocks.template.children[0])
	return blocks;
}
