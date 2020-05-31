import {
	memberExpression,
	identifier as id,
	returnStatement,
	blockStatement,
	stringLiteral,
	expressionStatement,
	callExpression,
	objectExpression,
	objectProperty,
	arrayExpression,
	arrowFunctionExpression,
	functionExpression,

} from "@babel/types";

import * as parser from "@babel/parser";

import traverse from "@babel/traverse";

const TMP_IDENTIFIER = '_tmp$ast';

export function makeValue(context, value, fn)
{
	if(!value.isExpression) {
		return stringLiteral(value.value);
	}

	let code = `${TMP_IDENTIFIER} = ${value.value}`;

	const ast = parser.parse(code, {
		sourceType: "unambiguous",
		strictMode: false,
	});

	return fn(ast, context);
}

/**
 * Compile expression to DOM expression and make in function
 */
export function makeFunction(ast, context)
{
	traverse(ast, {
		Identifier: {
			enter(path)
			{
				let id = path.node;
				if(context.methods.includes(id.name)) {
					if(path.parent.type !== 'CallExpression') {
						id.name = `${id.name}()`;
					}
				}
				
			},
		}
	});

	let result = ast.program.body[0];

	result = result.expression.right;

	return new functionExpression(null, [id('event')], new blockStatement([
		new returnStatement(result)
	]));
}

/**
 * Compile string to DOM expression
 */
export function makeString(ast, context)
{
	let deps = [];

	traverse(ast, {
		Identifier: {
			enter(path)
			{
				let id = path.node;

				if(context.observables.includes(id.name)) {
					deps.push(id.name);
					id.name = `${ id.name }()`;
				}
			},
			exit(path) {

			},
		}
	});

	let result = ast.program.body[0];

	result = result.expression.right;

	return {
		content: result,
		deps: deps,
	}
}

/**
 * Compile expression to DOM expression and make it computed
 */
export function makeComputed(ast, context)
{
	let deps = [];
	let statefulCounter = 0;
	let identifiersCounter = 0;
	let shouldWrap = true;

	traverse(ast, {
		Identifier: {
			enter(path)
			{
				let id = path.node;

				// if(['label', 'key'].includes(path.key) || path.node.name === TMP_IDENTIFIER) {
				// 	return;
				// }

				identifiersCounter++;

				if(context.observables.includes(id.name)) {
					statefulCounter++;
				}
			}
		}
	});

	
	if(identifiersCounter <= 1 || statefulCounter == 0) {
		shouldWrap = false;
	}

	// console.log(context, identifiersCounter, statefulCounter, shouldWrap)

	traverse(ast, {
		Identifier: {
			enter(path)
			{
				let id = path.node;

				if(['label', 'key'].includes(path.key)) {
					return;
				}

				if(context.observables.includes(id.name)) {
					deps.push(id.name);
					if(shouldWrap) {
						id.name = `${ id.name }()`;
					}
				}
			},
			exit(path) {

			},
		}
	});

	let result = ast.program.body[0];

	result = result.expression.right;
	
	if(deps.length === 0 || shouldWrap === false) {
		return result;
	}
	
	deps = new arrayExpression(deps.map((item) => {
		return id(item);
	}));


	let body = new arrowFunctionExpression([],
		new blockStatement([
			new returnStatement(result)
		])
	);

	return new callExpression(
		id('computed'),
		[deps, body]
	)
}



/**
 * Compile expression to DOM expression and make it computed
 */
export function makeSubscribe(ast, context)
{
	let deps = [];
	let statefulCounter = 0;
	let identifiersCounter = 0;
	let shouldWrap = true;

	traverse(ast, {
		Identifier: {
			enter(path)
			{
				let id = path.node;

				if(['label', 'key'].includes(path.key) || path.node.name === TMP_IDENTIFIER) {
					return;
				}

				identifiersCounter++;

				if(context.observables.includes(id.name)) {
					statefulCounter++;
				}
			}
		}
	});

	
	if(identifiersCounter <= 1 || statefulCounter == 0) {
		shouldWrap = false;
	}

	// console.log(identifiersCounter, statefulCounter, shouldWrap)

	traverse(ast, {
		Identifier: {
			enter(path)
			{
				let id = path.node;

				if(['label', 'key'].includes(path.key)) {
					return;
				}

				if(context.observables.includes(id.name)) {
					deps.push(id.name);
					if(shouldWrap) {
						id.name = `${ id.name }()`;
					}
				}
			},
			exit(path) {

			},
		}
	});

	let result = ast.program.body[0];

	result = result.expression.right;
	
	// if(deps.length === 0 || shouldWrap === false) {
	// 	return result;
	// }
	
	deps = new arrayExpression(deps.map((item) => {
		return id(item);
	}));

	return {
		shouldWrap,
		deps,
		expr: result,
	}
	
}