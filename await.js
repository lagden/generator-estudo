/* Exemplo Await
 *
 * ES7 features
 */

'use strict'

import pMapSeries from 'p-map-series'
import _ from 'lodash'
import deasync from 'deasync'
import randAsync from './lib/async'
import out from './lib/out'

const range = _.range(1, 10)
const sleep = deasync((timeout, done) => {
	setTimeout(done, timeout)
})

function getAll(res) {
	return res
}

function helper(v) {
	console.log(v)
	// add flag = false to avoid reject
	// return randAsync(v, false)
	return randAsync(v).then(getAll).catch(getAll)
}

// Paralelo - Promise
console.log('Executando em paralelo...')
async function paralelo(arr, fn) {
	const p = await Promise.all(arr.map(fn))
	console.log('Finalizado...')
	return p
}
paralelo(range, helper)
	.then(out)
	.catch(out)

sleep(2000)
console.log('---------------')

// Série
console.log('Executando em série...')
async function serie(arr, fn) {
	const s = await pMapSeries(arr, v => fn(v))
	console.log('Finalizado...')
	return s
}
serie(range, helper)
	.then(out)
