const fs = require('fs')
const path = require('path')
const request = require('request')

const debug = require('debug')
var log = debug('cs-plugin-bulk-compile:compiler')

function compileOnInterval(targets) {
	let delay = 0
	Object.keys(targets).forEach(target => {
		;(target => {
			log(target)
			setTimeout(() => {
				const apiCmd = `${global.api}/api/compile-start/${target}`
				log(apiCmd)
				request(apiCmd)
			}, delay)
		})(target)
		delay += 1000
	})
}
module.exports = {
	compileOnInterval
}
