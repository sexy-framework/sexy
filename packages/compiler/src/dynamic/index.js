import { makeAttrValue } from './value';
import { attrs } from './attrs';
import { events } from './events';
import { props } from './props';
// import { slots } from './slots';

// export { attrs, events, props }

export default function dynamic(context)
{
	return {
		attrs: attrs.bind(context),
		events: events.bind(context),
		props: props.bind(context),
	}
}