import { parse } from 'sexy-framework/parser';
import { compile } from 'sexy-framework/compiler';
import { observable, computed, subscribe, watch } from 'sexy-framework/observable';


import time from './time';




function gett() {


	let html = `
	<div class="container content">
		<p>
			Компоненты – это отличный способ писать переиспользуемый код. Из-за того, что Sexy фреймворк действительно нативный, он практически не тратит время на гидратацию статических элементов.
		</p>
		<p>
			Теперь вы можете писать вообще все элементы с помощью компонентного подхода: кнопки, меню, разметку и так далее. Производительность не просядет!
		</p>
		<p>
			Однофайловые компоненты позволяют использовать компоненты в самом удобном способе: шаблон, javascript и стили в одном файле.
		</p>
		<p>
			Sexy framework позволяет регистрировать компоненты глобально, но очень против такого подхода. Вместо этого мы создали авто-импорт и регистрацию компонентов, из-за этого компоненты должны храниться в в одной директории, например, components (настраивается в настройках sexy-loader).
		</p>

		<docs.code type="html" :code="codeExamples.get('example')"></docs.code>
		
		<h2 class="title">
			Использование препроцессоров
		</h2>
		<p>
			Sexy позволяет использовать препроцессоры для обработки CSS стилей. Для этого необходимо использовать атрибут lang для тега style, в котором указать нужное расширения файла.
		</p>

		<docs.code type="html" :code="codeExamples.get('scss')"></docs.code>
	</div>

	<script>
	export { Layout } from '@layouts/docs.sexy';

	let codeExamples = new Map();

	codeExamples.set('example', \`
	// Multi node root
	<div>1</div>
	<div>2</div>
	<div>3</div>

	// Javascript код компонента
	<script></script>

	// Styles
	<style></style>
	\`);

	codeExamples.set('scss', \`
	<style lang="scss">
	$body-color: 'red';
	</style> 
	\`);

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