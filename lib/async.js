'use strict'

import _ from 'lodash'
import chalk from 'chalk'

const yes = chalk.bold.green
const no = chalk.bold.red

function randAsync(v, useReject = true) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (useReject) {
				const x = _.random(0, 10)
				if (x % 2) {
					resolve(yes(`Resolvido ${v}`))
				} else {
					reject(no(`Rejeitado ${v}`))
				}
			} else {
				resolve(yes(`Resolvido ${v}`))
			}
		}, 500)
	})
}

export default randAsync
