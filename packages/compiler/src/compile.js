import { Expression } from '@hawa/parser';

import {
	variableDeclaration,
	variableDeclarator,
	memberExpression,

	ExportDefaultDeclaration,
	ObjectExpression,
	ObjectProperty,
	ObjectMethod,
	CallExpression,
	FunctionExpression,
	ArrowFunctionExpression,
	BlockStatement,
	LabeledStatement,
	ReturnStatement,
	StringLiteral,
	identifier as id,
	program,
} from "@babel/types";
import generate from "@babel/generator";



let VariableCounter = 0;
let LastVariableId = null;
let Templates = new Set();

function cleanup()
{
	VariableCounter = 0;
	LastVariableId = id('hydrate');
	Templates = new Set();
}

function createTemplate(program)
{
	let template = program.makeTemplate();

	console.log(template)
	Templates.add(template);

	return id(`_tpl$${ Templates.size }`);
}

function getLastVariableId()
{
	return LastVariableId;
}

function createVariable(context = null, Action = (n, l) => l)
{
	let name = id(`_el$${ ++VariableCounter }`);

	let delcarationValue = Action(name, LastVariableId);

	let value = new variableDeclaration('let', [
		new variableDeclarator(
			name,
			delcarationValue
		)
	]);

	LastVariableId = name;

	return {
		name,
		value,
	};
}

// nextSibling

export function compile(entity)
{
	cleanup();

	let tpl = entity.makeTemplate(true);
	let body = [];

	let programContext = body;

	function handle(entity)
	{
		entity.handle(programContext, { createVariable, getLastVariableId, createTemplate });
	}

	[entity].map((item) => handle(item));

	// console.log(tpl);
	// console.log(Templates);

	let code = generate(program(
		body, 
		[],
		'module'
	), {
		retainLines: false,
		compact: false,
		minified: false,
		concise: false,
		quotes: "double",
	});

	console.log(code.code);
}