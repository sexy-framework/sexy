// import { Directive } from '../directive';

// static parser(entity)
// 	{
// 		if(entity.type !== 'component') {
// 			return;
// 		}

// 		let modelDirective = entity.option.directives[Model.getName()];

// 		if(modelDirective === undefined) {
// 			return;
// 		}

// 		entity.option.props['value'] = {
// 			value: `(${ modelDirective.value.value })()`,
// 			isExpression: true,
// 		};
		
// 		// get
// 		// console.log(entity.option);
// 	}

export function bind(node, options, value, render)
{
	let valueProp = 'value';

	if(node.type === 'checkbox') {
		valueProp = 'checked';
	}

	function updateValue(event)
	{
		if(event instanceof CustomEvent) {
			value.apply(null, event.detail);
		} else {
			value(node[valueProp]);
		}
	}

	node[valueProp] = value();

	node.addEventListener('input', updateValue);

	return () => {
		node.removeEventListener('input', updateValue);
	}
}