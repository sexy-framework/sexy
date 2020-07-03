import boxen from 'boxen';
import c from 'chalk';

export function box()
{
	let header = c.hex('FF69B4').bold('Sexy framework');

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
		borderColor: '#FF69B4',
		padding: 1,
		margin: 1,
	});
}
