import { parse } from 'sexy-framework/parser';
import { compile } from 'sexy-framework/compiler';
import { observable, computed, subscribe, watch } from 'sexy-framework/observable';


import time from './time';




function gett() {

	

	let html = `
	<figure class="highlight">
		<pre (html)="highlightedCode"></pre>
		<div class="label">
			<div class="tag">{{ type }}</div>	
		</div>
	</figure>

	<script async>
	import { html } from 'sexy-framework/directives'

	let code = p('No code');
	let type = p('html');

	let highlightedCode = o(1);

	async function highlight()
	{
		const hljs = await import('highlight.js');

		// let h = module.default;
		let value = hljs.highlight(type(), code()).value;

		console.log(type(), code(), value);
		$el.firstChild.innerHTML = value;

		highlightedCode(value);
	}

	if($render) {
		await highlight();
	}
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