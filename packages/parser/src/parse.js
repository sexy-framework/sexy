import { prepare } from './prepare';
import { isComponent } from './utils';

import { Expression, Text, Node, Slot, Component } from './types';

import { Parser as HTMLParser } from 'htmlparser2';

export function parseBlocks(blocks, html)
{
	for(let key in blocks) {
		let regexp = new RegExp(`<${key}.*>((.|\\s)*)<\\/${key}>`, 'g');
		let matches = regexp.exec(html);
		if(matches) {
			blocks[key] = matches[1];
		}
	}

	return blocks;
}

export function parse(html)
{
	// get additional blocks e.g. script, style, doc
	let blocks = parseBlocks({
		script: null,
		style: null,
	}, html);

	// clean up html and replace expression with tag-expression
	html = prepare(blocks, html);

	// Parse TAGs
	let stack = [
		new Expression({ type: 'program' })
	];

	function currentStackNode()
	{
		return stack[stack.length - 1];
	}

	function isBlockTag(name)
	{
		return stack.length === 1 && ['script', 'style'].includes(name);
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

	}, { decodeEntities: true })
	
	parse.write(html);
	parse.end();

	blocks.template = stack[0];
	// console.log(blocks.template.children[0])
	return blocks;
}
