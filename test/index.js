import { parse } from 'sexy-framework/parser';
import { compile } from 'sexy-framework/compiler';
import { observable, computed, subscribe, watch } from 'sexy-framework/observable';


import time from './time';




function gett() {

	

	let html = `
	<li>
		<asd.a code="123" :name="asd"></asd.a>
		<docs.code :code="codeExamples.get('test')"></docs.code>
	</li>

	<script>
	let name = p([]);
	let items = p([]);
	let HiddenClass = 'is-hidden';

	</script>


	`
	let blocks = parse(html);

	let d = compile({
		path: '../components',
        delimeter: '-',
        isPage: false,
        isLayout: true,
	}, blocks);

	let i = d.module({
		afterImport: '',
	})
	
	console.log(i);
}


gett();