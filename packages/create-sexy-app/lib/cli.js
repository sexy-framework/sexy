#!/usr/bin/env node

const path = require('path')
const chalk = require('chalk')
const sade = require('sade')
const fs = require('fs')
const { version } = require('../package.json')

const prog = sade('create-sexy-app');

function copyFolderSync(from, to) {
	try {
		fs.mkdirSync(to);
	} catch (e) {}

	fs.readdirSync(from).forEach((element) => {
		const stat = fs.lstatSync(path.join(from, element));
		if (stat.isFile()) {
			fs.copyFileSync(path.join(from, element), path.join(to, element));
		} else if (stat.isSymbolicLink()) {
			fs.symlinkSync(fs.readlinkSync(path.join(from, element)), path.join(to, element));
		} else if (stat.isDirectory()) {
			copyFolderSync(path.join(from, element), path.join(to, element));
		}
	});
}

prog
	.command('init [dir] [yarn]', '', { default: true })
	.describe('Build the source directory. Expects an `index.js` entry file.')
	.example('build app public -o main.js')
	.action((outDir = '.') => {
		console.log()
		console.log(chalk `{cyan create-sexy-app v${version}}`)
		console.log(chalk `✨ Generating Sexy project in {cyan ${outDir}}`)
		// console.log(path.resolve(__dirname, '../template'), path.resolve(process.cwd(), outDir))
		copyFolderSync(path.resolve(__dirname, '../template'), path.resolve(process.cwd(), outDir))
		console.log()

		console.log(chalk `✨ Install dependencies, please`)
		console.log()

		if(outDir !== '.') {
			console.log(chalk `Make {cyan cd ./${outDir}}`)
		}
		console.log(chalk `Install deps with {cyan npm install} or {cyan yarn install}`)
		console.log(chalk `Run app with {cyan npm start} or {cyan yarn start}`)

		console.log()
	});


prog.parse(process.argv);
