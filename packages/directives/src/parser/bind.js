export function bind(entity, directive)
{
	if(entity.type !== 'component') {
		return;
	}

	entity.option.props['value'] = {
		value: `(${ directive.value })()`,
		isExpression: true,
	};
}