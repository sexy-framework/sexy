import { parse } from 'sexy-framework/parser';
import { compile } from 'sexy-framework/compiler';
import { observable, computed, subscribe, watch } from 'sexy-framework/observable';


import time from './time';




function gett() {


	let html = `
	<div class="container content">
		<p>
			Блок \\@if / \\@endif используется для рендеринга блока по условию. Блок будет отображаться только в том случае, если выражение условия возвращает значение, приводимое к true.
		</p>
		<docs.code type="html" :code="codeExamples.get('if')"></docs.code>
		<p>
			Также можно добавить блок «иначе», используя директиву \\@else или \\@elseif:
		</p>
		<docs.code type="html" :code="codeExamples.get('if-else')"></docs.code>

		<br>
		<h2 class="title">
			Условный рендеринг группы элементов
		</h2>
		<p>
			Условный рендеринг поддерживает множество элментов
		</p>
		<docs.code type="html" :code="codeExamples.get('if-group')"></docs.code>
		
		<br>
		<h2 class="title">
			Смешанный рендеринг
		</h2>
		<p>
			Вы можете группировать использование условной отрисовки с отрисовкой списков:
		</p>
		<docs.code type="html" :code="codeExamples.get('if-mixed')"></docs.code>

	</div>



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