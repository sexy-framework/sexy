export function module({
	imports,
	exportnames,
	components,
	templates,
	script,
	render,
	scriptOptions,
	loaderOptions
})
{
	return ({
		afterImport = '',
		componentScope = ''
	}) => {

		let renderFunction = 'function render';

		let exportComponent = `
		${ exportnames }
		export default render;
		`;

		if(scriptOptions.empty && loaderOptions.client) {
			return `
			${ renderFunction }(c, $node) {
				return {
					node: $node,
					hooks: {},
				}
			}

			${ exportComponent }
			`
		}

		return `
		import { observable, computed, subscribe, watch } from 'sexy/observable';
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
			firstChild as _firstChild$,
			nextSibling as _nextSibling$,
		} from 'sexy/render';

		import {
			transition as _transition$,
		} from 'sexy/transition'

		// templates
		${ templates }

		${ componentScope }
		
		// component function
		${ renderFunction }($context, $node = false) {
			let $el;
			let $render = $node === false;

			let { $props, $slots, $refs, $customInit } = parseContext($context);
			
			let $emit;
			// code
			${ script }
			
			// render
			${ render }
		}
		
		${ exportComponent }
		`;
	}
}
