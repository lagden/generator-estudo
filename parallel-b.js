/* Exemplo Paralelo B
 *
 * Nesse exemplo utilizei a biblioteca `co`, que executa um array de
 * promises em parelelo.
 *
 * Se alguma Promessa (Promise) for rejeitada (reject),
 * o ciclo é interrompido e a captura (catch) é disparada.
 */

'use strict'

import _ from 'lodash'
import co from 'co'
import randAsync from './lib/async'
import out from './lib/out'

function run(lista, fn) {
	return co(function * () {
		return yield lista.map(fn)
	})
}

run(_.range(1, 11), randAsync)
	.then(out)
	.catch(out)
