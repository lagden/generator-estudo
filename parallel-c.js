/* Exemplo Paralelo C
 *
 * Mesmo que o Exemplo Paralelo B, mas o ciclo não é interrompido
 * se alguma Promessa (Promise) for rejeitada (reject).
 *
 * O método `getAll` faz o tratamento!
 */

'use strict';

import _ from 'lodash';
import co from 'co';
import {async} from './lib/async';

let range = _.range(1, 11);

function getAll(res) {
  return res;
}

function fn(v) {
  return async(v).then(getAll).catch(getAll);
}

function runSeries(lista, fn) {
  return co(function * (){
    let promises = lista.map(fn);
    return yield promises;
  });
}

runSeries(range, fn)
  .then(console.log)
  .catch(console.log);
