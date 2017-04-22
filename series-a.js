/* Exemplo Serie A
 *
 * Nesse exemplo utilizei o `Promise.all`, que executa um array de
 * promises em parelelo, mas é tranformado em execução serial pela
 * biblioteca `co-series`.
 *
 * Se alguma Promessa (Promise) for rejeitada (reject),
 * o ciclo é interrompido e a captura (catch) é disparado.
 */

'use strict'

import _ from 'lodash'
import series from 'co-series'
import randAsync from './lib/async'
import out from './lib/out'

const range = _.range(1, 11)
const total = range.length
let cc = 0

function helper(v) {
	console.log(`${++cc} of ${total} - ${v}`)
	return randAsync(v)
}

function run(lista, fn) {
	return Promise.all(lista.map(series(fn)))
}

run(range, helper)
	.then(out)
	.catch(out)
