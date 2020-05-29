import {
	memberExpression,
	identifier as id,
} from "@babel/types";

export default function node(context, options)
{
	let template = options.createVariable(context, (n, l) => {
		return new memberExpression(
			l, id('nextSibling')
		);
	});

	context.push(template.value);
	
	// let template = createVariable(context, (n, l) => {
	// 	return id('createTeamplate');
	// });

	// context.push(template.value);

	// let pointer = createVariable(context, (n, l) => {
	// 	if(this.children.length > 1) {
	// 		return new memberExpression(
	// 			l, id('firstChild')
	// 		);
	// 	}

	// 	return l;
	// });
	
	// // console.log(this.children.length);
	// context.push(pointer.value);
}