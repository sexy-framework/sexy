import {
	memberExpression,
	identifier as id,

	stringLiteral,
	expressionStatement,
	callExpression,
	objectExpression,
	objectProperty,

} from "@babel/types";

import { getConfig } from './component';
import { children } from './utils';

import { attrs } from '../dynamic';



export default function dynamic(context, options)
{
	let init = options.createVariable(context, (n, l) => {
		
		if(this.option.props.is === undefined) {
			throw new Error(`Dynamic component should have 'is' property`)
		}

		let expr = options.dynamic.expression(this.option.props.is, l, context, options);

		return new callExpression(
			id('_dynamic$'), [
				expr,
				l,
				id('$render'),
				getConfig(this, context, options, false)
			]
		);
	});

	context.push(init.value);
}





