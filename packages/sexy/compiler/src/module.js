export function module({ imports, exportnames, components, templates, script, render, loaderOptions })
{
	return ({
		afterImport = '',
		componentScope = ''
	}) => `
		import { observable, computed, subscribe, watch } from 'sexy-framework/observable';
		${ imports }
		${ components }
		${ afterImport }
		${ loaderOptions.prependCode }

		import {
			attrs as _makeAttrs$,
			events as _makeEvents$,
			slot as _slot$,
			slotReplaceTemplate as _slot$templateRender,
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
			createHooks as _createHooks$,
			dynamic as _dynamic$,
			parseContext,
			loadComponent,
		} from 'sexy-framework/render';

		import {
			transition as _transition$,
		} from 'sexy-framework/transition'

		// templates
		${ templates }

		${ componentScope }
		
		// component function
		function render($context, $hydrateNode = false) {
			let $el;
			let $render = $hydrateNode === false;

			if(SSR_ONLY && !$render) {
				return {
					node: $el,
					hooks: {},
				};
			}

			let { $props, $slots, $refs, $customInit } = parseContext($context);
			
			let $emit;
			// code
			${ script }
			
			let node = $el;
			// render
			${ render }
		}
		
		${ exportnames }

		export default render;
		`;
}
