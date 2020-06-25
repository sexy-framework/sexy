import {
	memberExpression,
	identifier as id,
	arrowFunctionExpression,
	blockStatement,
	callExpression,
	expressionStatement,
	stringLiteral,
	objectExpression,
	objectProperty,
	returnStatement,
	conditionalExpression,
	assignmentExpression,
	IfStatement,
	arrayExpression,
} from "@babel/types";

import { attrs } from '../dynamic';

import { children, getFirstTemplateNode } from './utils';

import { CUR_EACH_LOOP_KEY } from './each';

export function getConfig(entity, context, options)
{
	let obj = [];
	// create props
	if(Object.keys(entity.option.props).length > 0) {
		let $props = options.dynamic.attrs(entity.option.props, options.getLastVariableId(), context, options, true);
		obj.push(
			objectProperty(
				id('$props'),
				$props
			)
		)
	}

	let callbackContext = [];

	// create transition
	options.dynamic.transition(entity.option.transition, id('$node'), callbackContext, options);
	// create directives
	options.dynamic.directives(entity.option.directives, id('$node'), callbackContext, options);
	// create refs
	options.dynamic.ref(entity, id('$node'), callbackContext, options);
	// create attrs
	options.dynamic.attrs(entity.option.attributes, id('$node'), callbackContext, options);
	// create events
	options.dynamic.events(entity, id('$node'), callbackContext, options);

	if(entity.option.key) {
		callbackContext.push(
			expressionStatement(
				callExpression(
					id('_setKey$'),
					[
						id(CUR_EACH_LOOP_KEY),
						id('$node'),
						id('$render'),
					]
				)
			)
		);
	}

	let customInit = [];
	
	if(entity.inheritable()) {
		customInit.push(id('$customInit[1]'))
	} else {
		customInit.push(id('null'))
	}

	if(callbackContext.length > 0) {
		customInit.push(
			arrowFunctionExpression([
				id('$hooks'),
				id('$node'),
				id('$render'),
			], blockStatement(callbackContext))
		);
	} else {
		customInit.push(id('null'))
	}

	if(customInit.length > 0) {
		obj.push(
			objectProperty(
				id('$customInit'),
				arrayExpression(customInit)
			)
		);
	}

	// create slots
	if(entity.children.length > 0) {
		
		let slots = [];

		for(let slot of entity.children) {

			let body = [];

			let isEmptyTag = slot.attrs['save-tag'] === undefined || slot.attrs['save-tag'] === false;
			
			let template;

			if(isEmptyTag) {
				template = options.createVariable(body, (n, l) => {
					return id('$node');
				});

				body.push(template.value);

				body.push(
					IfStatement(
						id('$render'),
						blockStatement([
							expressionStatement(
								assignmentExpression('=', 
									template.name,
									callExpression(
										memberExpression(id('document'), id('createElement')), [
											stringLiteral('template')
										]
									)
								)
							),
							expressionStatement(
								assignmentExpression('=', 
									memberExpression(template.name, id('innerHTML')),
									stringLiteral(slot.makeTemplate(true))
								)
							)
						])
					)
				);

				let firstChildFix = options.createVariable(body, (n, l) => {
					return conditionalExpression(
						id('$render'),
						memberExpression(
							memberExpression(template.name, id('content')),
							id('firstChild')
						),
						template.name
					)
				});

				body.push(firstChildFix.value);

				// body.push(template.value);
			} else {
				template = options.createVariable(body, (n, l) => {
					return memberExpression(id('$node'), id('firstChild'))
				});

				body.push(
					IfStatement(
						id('$render'),
						blockStatement([
							expressionStatement(
								assignmentExpression('=', 
									memberExpression(id('$node'), id('innerHTML')),
									stringLiteral(slot.makeTemplate(true))
								)
							)
						])
					)
				);

				body.push(template.value);
			}

			let lastChild = children(slot, body, options, () => {});

			if(isEmptyTag) {
				// console.log(template.name)
				body.push(
					expressionStatement(
						callExpression(
							id('_slot$templateRender'), [
								id('$node'),
								template.name,
								id('$render'),
							]
						)
					)
				);
			}

			slots.push(
				objectProperty(
					stringLiteral(slot.attrs.slot),
					arrowFunctionExpression([
						id('$node'),
						id('$render'),
					], blockStatement(body)),
				)
			)
		}

		obj.push(
			objectProperty(
				id('$slots'),
				objectExpression(slots)
			)
		)
		// body.push(template.value);
	}
	

	return objectExpression(obj)
}

// TO DO NEXT NODES
export default function component(context, options)
{
	
	let init = options.createVariable(context, (n, l) => {
		return new callExpression(
			id('loadComponent'), [
				id(this.getName()),
				stringLiteral(this.name),
				l,
				id('$render'),
				getConfig(this, context, options)
			]
		);
	});

	context.push(init.value);

	// context.push(expressionStatement(
	// 	callExpression(id('_dispatchHook$'), [
	// 		init.name,
	// 		stringLiteral('mounted')
	// 	])
	// ));

	// options.dynamic.setAttr({
	// 	Type: this,
	// 	name: 'key',
	// }, init, context, options);

	// console.log(init, context)

	// options.dynamic.attrs(this.option.attrs, init, context, options);
	

	// let template = options.createVariable(context, (n, l) => {
	// 	return new memberExpression(
	// 		l, id('nextSibling')
	// 	);
	// });

	// context.push(template.value);

}
