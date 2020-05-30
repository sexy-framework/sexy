import traverse from "@babel/traverse";

export function dependencies(ast, observables = [])
{
	let deps = {};

	let contextStack = [];
	let isVariableDeclaration = false;

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
				isVariableDeclaration = true;

				let id = path.node.id;
				let value = path.node.init;
				let context = getContext();

				if(isSubContext() || value === null) {
					context.vars.push(id.name);
					return;
				}
		    },
		    exit() {
		    	isVariableDeclaration = false;
		    }
		},
		ArrowFunctionExpression: {
			enter(path)
			{
				if(isVariableDeclaration) return;
				createContext(path.container.id.name);
			},
		    exit(path)
		    {
				if(isVariableDeclaration) return;
		    	closeContext();
		    }
		},
		FunctionDeclaration: {
			enter(path)
			{
				if(isVariableDeclaration) return;
				createContext(path.node.id.name);
		    },
		    exit(path)
		    {
		    	if(isVariableDeclaration) return;
		    	closeContext();
		    }
		}
	});

	return deps;
}