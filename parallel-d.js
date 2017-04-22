/* Exemplo Paralelo D
 *
 * Mesmo que o Exemplo Paralelo A, mas o ciclo não é interrompido se alguma
 * Promessa (Promise) for rejeitada (reject).
 *
 * O método `getAll` faz o tratamento!
 */

'use strict'

import _ from 'lodash'
import randAsync from './lib/async'
import out from './lib/out'

function getAll(res) {
	return res
}

function helper(v) {
	return randAsync(v).then(getAll).catch(getAll)
}

function run(lista, fn) {
	return Promise.all(lista.map(fn))
}

run(_.range(1, 11), helper)
	.then(out)
	.catch(out)
