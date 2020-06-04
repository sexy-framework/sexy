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

import { attrs } from '../dynamic';


export default function node(context, options)
{
	options.dynamic.directives(this.option.directives, options.getLastVariableId(), context, options);

	// register node reference 
	options.dynamic.ref(this, options.getLastVariableId(), context, options);

	// set data-key for node
	options.dynamic.setAttr({
		Type: this,
		name: 'key',
	}, options.getLastVariableId(), context, options);

	// add attrs for nodes
	options.dynamic.attrs(this.option.attributes, options.getLastVariableId(), context, options);
	
	// add events for node
	options.dynamic.events(this, options.getLastVariableId(), context, options);

	// handle children of node
	children(this, context, options);
}





