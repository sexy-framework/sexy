export function module({ imports, components, templates, script, render })
{
	return ({
		afterImport = '',
		componentScope = ''
	}) => `
		import { observable, computed, subscribe, watch } from 'sexy-framework/observable';
		${ imports }
		${ components }
		${ afterImport }

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
			createHooks as _createHooks$,
			parseContext,
			loadComponent,
		} from 'sexy-framework/render';

		import {
			transition as _transition$,
		} from 'sexy-framework/transition'

		_transition$
		
		// templates
		${ templates }

		${ componentScope }
		
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
}
