import { makeAttrValue } from './value';
import { attrs } from './attrs';
import { events } from './events';
import { props } from './props';
import { string } from './string';
import { expression } from './expression';
import { arrowFunction } from './arrowFunction';
import { setAttr } from './setAttr';
import { ref } from './ref';
import { directives } from './directives';

// export { attrs, events, props }

export default function dynamic(context)
{
	return {
		attrs: attrs.bind(context),
		events: events.bind(context),
		props: props.bind(context),
		string: string.bind(context),
		expression: expression.bind(context),
		arrowFunction: arrowFunction.bind(context),
		setAttr: setAttr.bind(context),
		ref: ref.bind(context),
		directives: directives.bind(context),
	}
}