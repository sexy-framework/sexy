import loaderUtils from 'loader-utils';
import qs from 'querystring';
import path from 'path';
import { parseName } from './name';

import { parse } from 'hawa/parser';
import { compile } from 'hawa/compiler';

import VirtualModules from './virtual'





// const loaderUtils = require('loader-utils')
// const qs = require('querystring')
// const path = require('path')
// const { parseName } = require('./name')
// const { parse } = require('hawa/parser')
// const { compile } = require('hawa/compiler')
// const VirtualModules = require('./virtual')




function hexEncode(str) {
	var hex, i;

	var result = "";
	for (i = 0; i < str.length; i++) {
		hex = str.charCodeAt(i).toString(16);
		result += ("000" + hex).slice(-4);
	}

	return result
}



export default function(source) {
	const virtualModuleInstances = new Map();
	/**
	 * Virtual
	 * @type {[type]}
	 */
	if (this._compiler && !virtualModuleInstances.has(this._compiler)) {
		virtualModuleInstances.set(this._compiler, new VirtualModules(this._compiler));
	}

	const virtualModules = virtualModuleInstances.get(this._compiler);

	/**
	 * Prepare
	 * @type {[type]}
	 */
	const loaderContext = this;

	const stringifyRequest = r => loaderUtils.stringifyRequest(loaderContext, r)

	const {
		target,
		request,
		minimize,
		sourceMap,
		rootContext,
		resourcePath,
		resourceQuery
	} = loaderContext

	// parse query
	const rawQuery = resourceQuery.slice(1)
	const inheritQuery = `&${rawQuery}`
	const incomingQuery = qs.parse(rawQuery)

	// parse options
	const options = loaderUtils.getOptions(loaderContext) || {};

	/**
	 * Compiler
	 */
	let blocks = parse(source);
	let { render, templates, script, components, styles, imports } = compile(options, blocks);

	/**
	 * Import style block
	 * @type {String}
	 */
	let importStyle = '';
	if (styles) {
		importStyle = `import _component_styles$ from ${ stringifyRequest(resourcePath + '?type=style') }`;
	}

	/**
	 * Add virtual module for styles
	 */
	if (incomingQuery.type === 'style') {
		let cssFileName = `${ resourcePath }.${ styles.options.lang }`;

		if (virtualModules) {
			virtualModules.writeModule(cssFileName, styles.source);
		}
		
		return `import '${cssFileName}';`;
	}
	 
	/**
	 * Main component code
	 */
	let code = `
		import { observable, computed, subscribe, watch } from 'hawa/observable';
		${ imports }
		${ importStyle }
		${ components }

		import {
			attrs as _makeAttrs$,
			events as _makeEvents$,
			slot as _slot$,
			map as _each$,
			statement as _statement$,
			directive as _directive$,
			getNode,
			getProp as _getProp$,
			setRef as _setRef$,
			setKey as _setKey$,
			emit as _emit$,
			call as _call$,
			createComponent as _createComponent$,
			parseContext,
			loadComponent,
		} from 'hawa/render';

		import {
			createHooks as _createHooks$,
		} from 'hawa/lifecycle'

		import {
			transition as _transition$,
		} from 'hawa/transition'

		_transition$
		
		// templates
		${ templates }
		
		// component function
		function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs, $customInit } = parseContext(context);
			
			let $emit, $id;
			// code
			${ script }
			
			// render
			${ render }
		}

		export default render;
		`;
	// }

	// console.log(code);

	return code;
	// return block.source || 'export default {}';
}
