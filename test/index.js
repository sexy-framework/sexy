import { parse } from 'sexy-framework/parser';
import { compile } from 'sexy-framework/compiler';
import { observable, computed, subscribe, watch } from 'sexy-framework/observable';


import time from './time';




function gett() {

	

	let html = `
	<li>
		<a>{{ name }}</a>
		@if(items.length > 0)
		<ul :class="HiddenClass">
			@each(item, key in items)
	    	<li :key="key"><a>{{ item }}</a></li>
	    	@endeach
		</ul>
		@endif
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