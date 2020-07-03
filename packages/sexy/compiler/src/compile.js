import { Expression } from 'sexy/parser';
import { analyse } from 'sexy/analyser';
import { script } from './script';
import { components } from './components';
import dynamic from './dynamic';
import { module } from './module';

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


function genCode(body) {
	return generate(program(
		body, 
		[],
		'module'
	), {
		retainLines: false,
		compact: false,
		minified: false,
		concise: false,
		quotes: "double",
	}).code;
}
/**
 * Compile template to DOM expressions
 */
export function compile(loaderOptions, blocks)
{
	let VariableCounter = 0;
	let contextStack = [];

	/**
	 * Template management
	 * @type {Set}
	 */
	let Templates = new Set();

	let codeAnalyse = analyse(blocks.script, loaderOptions);
	let dynamicExpressions = dynamic(codeAnalyse);

	function createTemplate(program)
	{
		let template = program.makeTemplate(true);

		Templates.add(template);

		return id(`_tpl$${ Templates.size }`);
	}

	function getTemplates()
	{
		let code = '';
		let i = 0;

		for(let tpl of Templates) {
			let index = ++i;
			code += `let _tpl$${ index } = document.createElement("template");\n`;
			code += `_tpl$${ index }.innerHTML = '${ tpl }';\n\n`;
		}

		return code;
	}

	/**
	 * Context management
	 * @param  {[type]} LastVariableId [description]
	 * @return {[type]}                [description]
	 */
	function createContext(init = false)
	{
		return contextStack.push({
			LastVariableId: init ? id('$node') : getLastVariableId(),
		});
	}

	function getCurrentContext()
	{
		return contextStack[contextStack.length - 1];
	}

	function removeContext()
	{
		contextStack.pop();
	}

	function getLastVariableId()
	{
		return getCurrentContext().LastVariableId;
	}

	function setLastVariableId(value)
	{
		getCurrentContext().LastVariableId = value;
	}

	function createVariable(context = null, Action = (n, l) => l)
	{
		let name = id(`_el$${ ++VariableCounter }`);

		let delcarationValue = Action(name, getLastVariableId());

		let value = new variableDeclaration('let', [
			new variableDeclarator(
				name,
				delcarationValue
			)
		]);

		setLastVariableId(name);

		return {
			name,
			value,
		};
	}

	/**
	 * Compile templates
	 * @type {[type]}
	 */
	let entity = blocks.template;
	let body = [];

	let options = {
		createContext,
		removeContext,
		createVariable,
		getLastVariableId,
		createTemplate,
		dynamic: dynamicExpressions,
	}

	function handle(entity)
	{
		entity.handle(body, options);
	}

	createContext(true);
	[entity].map((item) => handle(item));


	/**
	 * Generate code
	 * @type {[type]}
	 */
	return {
		module: module({
			render: genCode(body),
			templates: getTemplates(),
			script: script(codeAnalyse, blocks.script, loaderOptions),
			imports: genCode(codeAnalyse.imports),
			exportnames: genCode(codeAnalyse.exportnames),
			components: components(entity, codeAnalyse.imports)(loaderOptions.path, loaderOptions.delimeter),
			scriptOptions: codeAnalyse.scriptOptions,
			loaderOptions,
		}),
		styles: blocks.style,
	}
}
