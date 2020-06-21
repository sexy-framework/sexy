import boxen from 'boxen';
import c from 'chalk';

export function box()
{
	let header = c.bold.green('Sexy framework');

	let text = [
		header, '',
	];

	for(let arg of arguments) {
		if(Array.isArray(arg)) {
			arg = arg.join(' ');
		}

		text.push(arg);
	}

	let box = boxen(text.join('\n'), {
		borderColor: 'green',
		padding: 1,
		margin: 1,
	});

	console.log(box);
}