import traverse from "@babel/traverse";

export function dependencies(ast, observables = [])
{
	let deps = {};

	let contextStack = [];

	function isSubContext() {
		return contextStack.length > 0;
	}

	function createContext(name)
	{
		contextStack.push({
			name,
			vars: [],
			deps: [],
		});
	}

	function closeContext()
	{
		let context = contextStack.pop();
		deps[context.name] = context.deps;
	}

	function getContext()
	{
		return contextStack[contextStack.length - 1];
	}

	traverse(ast, {
		
		Identifier: {
			enter(path)
			{
				let context = getContext();
				let name = path.node.name;

				if(!isSubContext()) {
					return;
				}

				if(!context.vars.includes(name) && observables.includes(name)) {
					context.deps.push(name);
				}
			}
		},

		VariableDeclarator: {
			enter(path)
			{
				let id = path.node.id;
				let value = path.node.init;
				let context = getContext();

				if(isSubContext() || value === null) {
					context.vars.push(id.name);
					return;
				}
		    },
		},
		ArrowFunctionExpression: {
			enter(path)
			{
				createContext(path.container.id.name);
			},
		    exit(path)
		    {
		    	closeContext();
		    }
		},
		FunctionDeclaration: {
			enter(path)
			{
				createContext(path.node.id.name);
		    },
		    exit(path)
		    {
		    	closeContext();
		    }
		}
	});

	return deps;
}