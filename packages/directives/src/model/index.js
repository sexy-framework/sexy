import { Directive } from '../directive';

export default class Model extends Directive
{
	// constructor()
	// {
	// 	super();
	// }

	static parser(entity)
	{
		if(entity.type !== 'component') {
			return;
		}

		let modelDirective = entity.option.directives[Model.getName()];

		if(modelDirective === undefined) {
			return;
		}

		entity.option.props['value'] = {
			value: `(${ modelDirective.value.value })()`,
			isExpression: true,
		};
		
		// get
		// console.log(entity.option);
	}

	bindEvent(event)
	{
		if(event instanceof CustomEvent) {
			this.value.apply(null, event.detail);
		} else {
			this.value(this.node.value);
		}
	}

	mounted()
	{
		if(this.render) {
			this.node.value = this.value();
		}

		this.node.addEventListener('input', this.bindEvent.bind(this));
	}

	unmounted()
	{
		this.node.removeEventListener('input', this.bindEvent.bind(this));
	}

}