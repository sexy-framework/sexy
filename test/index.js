import { parse } from 'sexy-framework/parser';
import { compile } from 'sexy-framework/compiler';
import { observable, computed, subscribe, watch } from 'sexy-framework/observable';


import time from './time';




function gett() {

	

	let html = `
	<div>1</div>
	<Render></Render>
	<dynamic :is="tag" to="/href/asd" href="test" :class="1" (a)>1</dynamic>
	<some.comp :is="tag" to="1" :class="1" (a)>test</some.comp>
	<script>
	import Render from '1';
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