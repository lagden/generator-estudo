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
import {async} from './lib/async';

let range = _.range(1, 11);

function fn(v) {
  return async(v);
}

function run(lista, fn) {
  let promises = lista.map(fn);
  return Promise.all(promises);
}

run(range, fn)
  .then(console.log)
  .catch(console.log);
