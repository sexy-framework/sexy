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
	options.dynamic.transition(entity.option.transition, id('node'), callbackContext, options);
	// create directives
	options.dynamic.directives(entity.option.directives, id('node'), callbackContext, options);
	// create refs
	options.dynamic.ref(entity, id('node'), callbackContext, options);
	// create attrs
	options.dynamic.attrs(entity.option.attributes, {
		name: id('node')
	}, callbackContext, options);
	// create events
	options.dynamic.events(entity, id('node'), callbackContext, options);

	if(entity.option.key) {
		callbackContext.push(
			expressionStatement(
				callExpression(
					id('_setKey$'),
					[
						id(CUR_EACH_LOOP_KEY),
						id('node'),
						id('render'),
					]
				)
			)
		);
	}

	if(callbackContext.length > 0) {
		obj.push(
			objectProperty(
				id('$customInit'),
				arrowFunctionExpression([
					id('$hooks'),
					id('node'),
					id('render'),
				], blockStatement(callbackContext))
			)
		)
	}

	// create slots
	if(entity.children.length > 0) {
		
		let slots = [];

		for(let slot of entity.children) {

			let body = [];

			let template = options.createVariable(body, (n, l) => {
				let index = options.createTemplate(slot);
				return new callExpression(
					id('getNode'), [index, id('node'), id('render')]
				);
			});

			body.push(template.value);

			let lastChild = children(slot, body, options, getFirstTemplateNode);

			let returnPointer = new returnStatement(
				new conditionalExpression(
					id('render'), template.name, lastChild
				)
			);

			body.push(returnPointer);

			slots.push(
				objectProperty(
					stringLiteral(slot.attrs.slot),
					arrowFunctionExpression([], blockStatement(body)),
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
				l,
				id('render'),
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