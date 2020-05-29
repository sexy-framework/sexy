import {
	memberExpression,
	identifier as id,

	stringLiteral,
	expressionStatement,
	callExpression,
	objectExpression,
	objectProperty,

} from "@babel/types";

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
				id('makeAttrs'), [
					point.name,
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
	let template = options.createVariable(context, (n, l) => {
		return new memberExpression(
			l, id('nextSibling')
		);
	});

	context.push(template.value);

	attrs.call(this, template, context, options);

	// let pointer = createVariable(context, (n, l) => {
	// 	if(this.children.length > 1) {
	// 		return new memberExpression(
	// 			l, id('firstChild')
	// 		);
	// 	}

	// 	return l;
	// });
	
	// // console.log(this.children.length);
	// context.push(pointer.value);
}