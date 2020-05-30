import {
	memberExpression,
	identifier as id,

	stringLiteral,
	expressionStatement,
	callExpression,
	objectExpression,
	objectProperty,

} from "@babel/types";

import { children } from './utils';

export function attrs(point, context, options)
{
	if(this.hasAttributes()) {
		let props = [];

		for(let key in this.attrs) {
			props.push(
				new objectProperty(
					stringLiteral(key),
					stringLiteral(this.attrs[key]),
				)
			)
		}

		let expression = new expressionStatement(
			new callExpression(
				id('_makeAttrs$'), [
					point,
					id('render'),
					new objectExpression(props),
				]
			)
		);

		context.push(expression);
	}
}

export function events(point, context, options)
{
	if(this.hasAttributes()) {
		let props = [];

		for(let key in this.attrs) {
			props.push(
				new objectProperty(
					stringLiteral(key),
					stringLiteral(this.attrs[key]),
				)
			)
		}

		let expression = new expressionStatement(
			new callExpression(
				id('makeAttrs'), [
					point,
					id('render'),
					new objectExpression(props),
				]
			)
		);

		context.push(expression);
	}
}

export default function node(context, options)
{
	// let template = false;

	// if(options.customDefine !== null) {
	// 	template = options.customDefine(context, options.firstChild);
	// 	delete options.customDefine;
	// }

	// if(template === false) {
	// 	template = options.createVariable(context, (n, l) => {
	// 		return new memberExpression(
	// 			l, id(options.firstChild ? 'firstChild' : 'nextSibling')
	// 		);
	// 	});

	// 	context.push(template.value);
	// }	

	attrs.call(this, options.getLastVariableId(), context, options);

	children(this, context, options);
}





