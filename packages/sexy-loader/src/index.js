import loaderUtils from 'loader-utils';
import qs from 'querystring';
import path from 'path';
import { parseName } from './name';

import { parse } from 'sexy-framework/parser';
import { compile } from 'sexy-framework/compiler';

import VirtualModules from './virtual'





// const loaderUtils = require('loader-utils')
// const qs = require('querystring')
// const path = require('path')
// const { parseName } = require('./name')
// const { parse } = require('sexy-framework/parser')
// const { compile } = require('sexy-framework/compiler')
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
	
	options.styles = options.styles === undefined ? true : options.styles;
	/**
	 * Compiler
	 */
	let blocks = parse(source);
	let { module, styles } = compile(options, blocks);

	/**
	 * Import style block
	 * @type {String}
	 */
	let importStyle = '';
	if (styles && options.styles) {
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
	
	return module({
		afterImport: importStyle,
	})
}
