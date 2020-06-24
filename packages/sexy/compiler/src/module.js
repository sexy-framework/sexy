export function module({
	imports,
	exportnames,
	components,
	templates,
	script,
	render,
	emptyComponent,
	loaderOptions
})
{
	return ({
		afterImport = '',
		componentScope = ''
	}) => {

		let exportComponent = `
		${ exportnames }
		export default render;
		`;

		if(emptyComponent && loaderOptions.client) {
			return `
			function render(c, $node) {
				return {
					node: $node,
					hooks: {},
				}
			}

			${ exportComponent }
			`
		}

		return `
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
		function render($context, $node = false) {
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
