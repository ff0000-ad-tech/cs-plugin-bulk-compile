const fs = require('fs')
const path = require('path')
const axios = require('axios')

const debug = require('@ff0000-ad-tech/debug')
var log = debug('cs-plugin-bulk-compile:compiler')

function compileOnInterval(targets) {
	let delay = 0
	Object.keys(targets).forEach(target => {
		; (target => {
			log(target)
			setTimeout(() => {
				const apiCmd = `${global.api}/compile-start/${target}`
				log(apiCmd)
				axios.get(apiCmd)
			}, delay)
		})(target)
		delay += 1000
	})
}
module.exports = {
	compileOnInterval
}
