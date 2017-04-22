/* Exemplo Serie C
 *
 * Mesmo que o Exemplo Serie B, mas o ciclo não é interrompido se alguma
 * Promessa (Promise) for rejeitada (reject).
 *
 * O método `getAll` faz o tratamento!
 */

'use strict'

import _ from 'lodash'
import co from 'co'
import series from 'co-series'
import randAsync from './lib/async'
import out from './lib/out'

const range = _.range(1, 11)
const total = range.length
let cc = 0

function getAll(res) {
	return res
}

function helper(v) {
	console.log(`${++cc} of ${total} - ${v}`)
	return randAsync(v).then(getAll).catch(getAll)
}

function run(lista, fn) {
	return co(function * () {
		return yield lista.map(series(fn))
	})
}

run(range, helper)
	.then(out)
	.catch(out)
