import loaderUtils from 'loader-utils';
import qs from 'querystring';
import path from 'path';
import { parseName } from './name';

import { parse } from '@hawa/parser';
import { compile } from '@hawa/compiler';


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

    let name = parseName(resourcePath, options);

    

    let blocks = parse(source);

    console.log(name, Object.keys(blocks));

    let { render, templates, script } = compile(blocks);

	return `
	import { observable, computed, subscribe, watch } from '@hawa/observable';
	import { map as _each$ } from '@hawa/map';

	import {
		attrs as _makeAttrs$,
		events as _makeEvents$,
		slot as _slot$,
		statement as _statement$,
		getNode,
		parseContext,
	} from '@hawa/render';
	
	// templates
	${ templates }
	
	// component function
	export default function render(context, node = false) {
		let render = node === false;

		let { $props, $slots } = parseContext(context);
		
		// code
		${ script }
		
		// render
		${ render }
	}
	`;
    // return block.source || 'export default {}';
}
