const TransitionContexts = new Map();
const LastContextID

export function createContext()
{
	return new Map();
}

export function createKeyedContext(context, key)
{
	let localContext = new Map();
	
	context.set(key, localContext);

	return localContext;
}

export function createTransition(context, transition, node)
{

}