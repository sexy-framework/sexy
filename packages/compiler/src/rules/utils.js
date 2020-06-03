import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	blockStatement,
	assignmentExpression,
	callExpression,
	conditionalExpression,
	expressionStatement,
	variableDeclaration,
	variableDeclarator,
} from "@babel/types";

export function getFirstTemplateNode(entity, context, options)
{
	let pointer = options.createVariable(context, (n, l) => {
		return new conditionalExpression(
			id('render'),
			new memberExpression(l, id('firstChild')),
			l
		)
	});

	context.push(pointer.value);

	// console.log(entity, entity.parent.isRoot())
	if(entity.parent.isRoot()) {
		// key for loops
		context.push(expressionStatement(
			assignmentExpression(
				'=',
				id('$emit'),
				callExpression(
					id('_emit$'), [
					pointer.name
				])
			)
		));

		// div key
		context.push(
			expressionStatement(
				callExpression(
					id('_setKey$'),
					[
						id('$key'),
						pointer.name,
						id('render'),
					]
				)
			)
		);

		// hooks
		context.push(
			expressionStatement(
				callExpression(
					id('_registerHooks$'),
					[
						id('$hooks'),
						pointer.name,
						id('render'),
					]
				)
			)
		);

		// directives
		context.push(expressionStatement(
			callExpression(
				id('_directives$'), [
				id('$hooks'),
				pointer.name,
				id('$directives'),
				id('render'),
			])
		));
	}
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
	if(entity.skipFirstChildInit()) {
		customDefiner = () => {};
	}
	// console.log(entity, entity.hasAloneTemplate());
	if(!entity.hasAloneTemplate() && !entity.isTemplate()) {
		options.createContext();
	}

	for (var i = 0; i < entity.children.length; i++) {
		childHandle(entity.children[i], context, options, i, customDefiner);
	}

	let lastChild = options.getLastVariableId();

	if(!entity.hasAloneTemplate() && !entity.isTemplate()) {
		options.removeContext();
	}

	return lastChild;
}

export function childHandle(entity, context, options, index, customDefiner)
{
	let isFirst = index === 0;

	if(customDefiner && isFirst) {
		customDefiner(entity, context, options);
	} else {
		if(!entity.skipInit()) {
			nextNode(context, options, isFirst ? 'firstChild' : 'nextSibling')
		}
	}

	entity.handle(context, options);
}