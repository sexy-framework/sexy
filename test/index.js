import { parse } from 'sexy-framework/parser';
import { compile } from 'sexy-framework/compiler';
import { observable, computed, subscribe, watch } from 'sexy-framework/observable';


import time from './time';




function gett() {

	

	let html = `
	<Route class="s">
		2
	</Route>

	<script>
	import { router } from '../internal/router';

	let tag = p('a');
	let to = p(null);

	function navigate() {
		router.navigate(to());
	}
	</script>


	`
	let blocks = parse(html);

	let d = compile({
		path: '../components',
        delimeter: '-',
	}, blocks);

	let i = d.module({
		afterImport: '',
	})
	
	console.log(i);
}


gett();