const argv = require('minimist')(process.argv.slice(2))
const compiler = require('./lib/compiler.js')

const debug = require('@ff0000-ad-tech/debug')
var log = debug('cs-plugin-bulk-compile')

global.api = argv.api

switch (argv.cmd) {
	case 'bulk':
		const targets = JSON.parse(argv.targets)
		log(targets)
		compiler.compileOnInterval(targets)
		break
}
