/* Exemplo Paralelo A
 *
 * Nesse exemplo utilizei o `Promise.all`, que executa um array de
 * promises em parelelo.
 *
 * Se alguma Promessa (Promise) for rejeitada (reject),
 * o ciclo é interrompido e a captura (catch) é disparado.
 */

'use strict';

import _ from 'lodash';
import {randAsync} from './lib/async';
import {out} from './lib/out';

function run(lista, fn) {
	return Promise.all(lista.map(fn));
}

run(_.range(1, 11), randAsync)
	.then(out)
	.catch(out);
