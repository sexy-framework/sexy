import { parse } from 'sexy/parser';
import { compile } from 'sexy/compiler';
import { observable, computed, subscribe, watch } from 'sexy/observable';


import time from './time';




function gett() {


	let html = `

	 <Route to="/docs/intro/get-started" class="button is-medium is-success">
        <common.icon type="play"></common.icon>
        <span>Начать знакомство</span>
    </Route>

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
