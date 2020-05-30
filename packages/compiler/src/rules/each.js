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


export function parseEachCondition(value)
{
	let statement = value.matchAll(/\((?<item>[A-z0-9]+)\s?(\,\s?(?<key>[A-z0-9]+)\s?)?\)\s?in\s(?<condition>.*)/g);

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
		condition,
		args,
	}
}

export default function each(context, options)
{
	let params = [];
	let body = [];

	params.push(options.getLastVariableId())

	let loop = parseEachCondition(this.value);

	let value = options.dynamic.expression(loop.condition, options.getLastVariableId(), context, options);
	params.push(value);

	let template = options.createVariable(body, (n, l) => {
		let index = options.createTemplate(this);
		return new callExpression(
			id('getNode'), [index, options.getLastVariableId(), id('render')]
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
			loop.args.map(item => id(item)),
			new blockStatement(body)
		)
	);



	let expression = options.createVariable(context, (n, l) => {
		return new callExpression(id('_each$'), params);
	});

	context.push(expression.value);
}