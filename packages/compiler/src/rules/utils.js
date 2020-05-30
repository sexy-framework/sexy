import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	blockStatement,
	callExpression,
	conditionalExpression,
} from "@babel/types";

export function getFirstTemplateNode(context, options)
{
	let pointer = options.createVariable(context, (n, l) => {
		return new conditionalExpression(
			id('render'),
			new memberExpression(l, id('firstChild')),
			l
		)
	});

	context.push(pointer.value);
}

export function nextNode(context, options, type)
{
	let template = options.createVariable(context, (n, l) => {
		return new memberExpression(
			l, id(type)
		);
	});

	context.push(template.value);
}

export function children(entity, context, options, customDefiner = false)
{
	options.createContext();

	for (var i = 0; i < entity.children.length; i++) {
		childHandle(entity.children[i], context, options, i, customDefiner);
	}

	let lastChild = options.getLastVariableId();

	options.removeContext();

	return lastChild;
}

export function childHandle(entity, context, options, index, customDefiner)
{
	let isFirst = index === 0;

	if(customDefiner && isFirst) {
		customDefiner(context, options);
	} else {
		if(!entity.skipInit()) {
			nextNode(context, options, isFirst ? 'firstChild' : 'nextSibling')
		}
	}

	entity.handle(context, options);
}