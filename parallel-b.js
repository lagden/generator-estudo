/* Exemplo Paralelo B
 *
 * Nesse exemplo utilizei a biblioteca `co`, que executa um array de
 * promises em parelelo.
 *
 * Se alguma Promessa (Promise) for rejeitada (reject),
 * o ciclo é interrompido e a captura (catch) é disparada.
 */

'use strict';

import _ from 'lodash';
import co from 'co';
import {async} from './lib/async';

let range = _.range(1, 11);

function fn(v) {
  return async(v);
}

function run(lista, fn) {
  return co(function * (){
    let promises = lista.map(fn);
    return yield promises;
  });
}

run(range, fn)
  .then(console.log)
  .catch(console.log);
