import {
	memberExpression,
	identifier as id,

	stringLiteral,
	expressionStatement,
	callExpression,
	objectExpression,
	objectProperty,

} from "@babel/types";

export function events(point, context, options)
{
	if(this.option.events === undefined) {
		return;
	}

	console.warn(this.option.events)

	return;
	
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