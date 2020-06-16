import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	blockStatement,
	returnStatement,
	conditionalExpression,
	callExpression,
} from "@babel/types";

import { children, getFirstTemplateNode } from './utils';

import { Expression } from 'sexy-framework/parser';

export const CUR_EACH_LOOP_KEY = '_eachNodeKey$';

export function parseEachCondition(entity)
{
	let statement = entity.value.matchAll(/(?<item>[A-z0-9]+)\s?(\,\s?(?<key>[A-z0-9]+)\s?)?\s?in\s(?<condition>.*)/g);

	let condition = null;
	let args = [];

	for(let match of statement) {

		if(match.groups.item) {
			args.push(match.groups.item);
		} else {
			args.push('_item');
		}

		if(match.groups.key) {
			args.push(match.groups.key);
		} else {
			args.push('_index');
		}

		condition = match.groups.condition;
	}

	return {
		key: findKey(entity),
		condition,
		args,
	}
}

export function findKey(entity)
{
	let key = null;

	for(let child of entity.children)
	{
		if(child instanceof Expression) {
			key = findKey(child);
			break;
		} else if(child.option.key !== undefined) {
			key = child.option.key;
			break;
		}
	}

	if(key === null) {
		throw new Error('Key is required for Each loop (for hydration)');
	}

	return key;
}

export default function each(context, options)
{
	let params = [];
	let body = [];

	params.push(options.getLastVariableId())

	/**
	 * Loop preparation
	 * 1. Key generation function
	 * 2. Condition expression
	 * 3. Item and key idintifiers
	 * @type {[type]}
	 */
	let loop = parseEachCondition(this);

	let value = options.dynamic.expression(loop.condition, options.getLastVariableId(), context, options);
	let key = options.dynamic.arrowFunction({
		value: loop.key,
		args: loop.args
	}, options.getLastVariableId(), context, options).value;

	params.push(value);
	params.push(key);

	/**
	 * Get loop template
	 */
	let template = options.createVariable(body, (n, l) => {
		let index = options.createTemplate(this);
		return new callExpression(
			id('getNode'), [index, id('node'), id('render')]
		);
	});

	body.push(template.value);

	let lastChild = children(this, body, options, getFirstTemplateNode);

	let returnPointer = new returnStatement(
		new conditionalExpression(
			id('render'), template.name, lastChild
		)
	);

	body.push(returnPointer);

	params.push(
		new arrowFunctionExpression(
			[ id('node'), id('render'), id(CUR_EACH_LOOP_KEY) ].concat(loop.args.map(item => id(item))),
			new blockStatement(body),
		)
	);

	params.push(id('render'));

	let expression = options.createVariable(context, (n, l) => {
		return new callExpression(id('_each$'), params);
	});

	context.push(expression.value);
}
