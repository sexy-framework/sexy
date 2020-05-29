import { prepare } from './prepare';
import { isComponent } from './utils';

import { Expression, Text, Node, Slot, Component } from './types';

import { Parser as HTMLParser } from 'htmlparser2';

export function parse(html)
{
	html = prepare(html);

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
			stack.pop();
	    }

	}, { decodeEntities: true })
	
	parse.write(html);
	parse.end();
	console.log(stack)
	return stack[0];
}
