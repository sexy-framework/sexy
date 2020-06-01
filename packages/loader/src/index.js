import loaderUtils from 'loader-utils';
import qs from 'querystring';
import path from 'path';
import { parseName } from './name';

import { parse } from '@hawa/parser';
import { compile } from '@hawa/compiler';


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

	let { render, templates, script, components, styles } = compile(options, blocks);

	let importStyle = '';

	if (styles) {
		// importStyle = `import styles$$ from ; console.log(styles$$);`;
		const virtual = require(`virtual-file-loader?src=${ hexEncode(styles.source) }&file=style.${ styles.options.lang }`)
		console.log(virtual)
		// importStyle = `import css from '../test/page.css'`;
	}

	let code = '';

	// if (incomingQuery.type === 'style') {
	// 	code = styles.source;
	// } else {
		code = `
		import { observable, computed, subscribe, watch } from '@hawa/observable';
		import { map as _each$ } from '@hawa/map';
		${ importStyle }
		${ components }

		import {
			attrs as _makeAttrs$,
			events as _makeEvents$,
			slot as _slot$,
			statement as _statement$,
			getNode,
			getProp as _getProp$,
			setRef as _setRef$,
			parseContext,
			loadComponent,
		} from '@hawa/render';
		
		// templates
		${ templates }
		
		// component function
		export default function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs } = parseContext(context);
			
			// code
			${ script }
			
			// render
			${ render }
		}
		`;
	// }

	console.log(code);

	return code;
	// return block.source || 'export default {}';
}
