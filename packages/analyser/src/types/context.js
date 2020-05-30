import traverse from "@babel/traverse";

export function context(ast)
{
	let data = {
		observables: [],
		vars: [],
		methods: [],
	}

	let contextStack = [];
	
	function isSubContext() {
		return contextStack.length > 0;
	}

	function createContext(name)
	{
		contextStack.push({
			name,
			vars: [],
		});
	}

	function closeContext()
	{
		let context = contextStack.pop();
	}

	function getContext()
	{
		return contextStack[contextStack.length - 1];
	}

	traverse(ast, {
		
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

				if(value.type === 'CallExpression' && value.callee.name === '$o') {
					data.observables.push(id.name);
				} else if(['ArrowFunctionExpression', 'FunctionExpression'].includes(value.type)) {
					data.observables.push(id.name);
				} else {
					data.vars.push(id.name);
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

	return data;
}