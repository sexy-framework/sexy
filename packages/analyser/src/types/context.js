import traverse from "@babel/traverse";

export function context(ast)
{
	let data = {
		observables: [],
		vars: [],
		methods: [],
	}

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

	function canCreateContext()
	{
		if(isSubContext() || isVariableDeclaration) {
			return false;
		}

		return true;
	}

	traverse(ast, {
		
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

				if(value.type === 'CallExpression' && ['o', 'p'].includes(value.callee.name)) {
					data.observables.push(id.name);
				} else if(['ArrowFunctionExpression', 'FunctionExpression'].includes(value.type)) {
					data.observables.push(id.name);
				} else {
					data.vars.push(id.name);
				}
		    },
		    exit() {
		    	isVariableDeclaration = false;
		    }
		},
		ArrowFunctionExpression: {
			enter(path)
			{
				if(canCreateContext()) {
					createContext(path.container.id.name);
				}
			},
		    exit(path)
		    {
		    	if(canCreateContext()) {
		    		closeContext();
		    	}
		    }
		},
		FunctionDeclaration: {
			enter(path)
			{
				if(canCreateContext()) {
					data.methods.push(path.node.id.name);
					createContext(path.node.id.name);
				}
		    },
		    exit(path)
		    {
		    	if(canCreateContext()) {
		    		closeContext();
		    	}
		    }
		}
	});

	return data;
}