import { parse } from '@hawa/parser';
import { compile } from '@hawa/compiler';




let html = 
`
<div>start</div>
@if(1)
<div></div>
asdad
	@if(2)
	<div>iff2</div>
	@endif
asdasd
@elseif(test)
1
	<Nativ data-p="1">asd</Nativ>
	2
	@each(1)
	asdasd
	<slot>default text for slot</slot>
	@endeach
	3
	@else 
	asd
@endif
end
`;

let template = parse(html);

compile(template);
console.log(html);
