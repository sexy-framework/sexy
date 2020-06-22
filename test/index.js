import { parse } from 'sexy-framework/parser';
import { compile } from 'sexy-framework/compiler';
import { observable, computed, subscribe, watch } from 'sexy-framework/observable';


import time from './time';




function gett() {

	

	let html = `
	<dynamic :is="tag" @click="navigate">
		<slot></slot>
	</dynamic>

	<script>
	let tag = p('a');
	let to = p(null);

	function navigate() {
		alert(1)
	}

	function mounted()
	{
		console.log(tag, to);
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