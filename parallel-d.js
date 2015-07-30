/* Exemplo Paralelo D
 *
 * Mesmo que o Exemplo Paralelo A, mas o ciclo não é interrompido se alguma
 * Promessa (Promise) for rejeitada (reject).
 *
 * O método `getAll` faz o tratamento!
 */

'use strict';

import _ from 'lodash';
import {async} from './lib/async';

let range = _.range(1, 11);

function getAll(res) {
  return res;
}

function fn(v) {
  return async(v).then(getAll).catch(getAll);
}

function run(lista, fn) {
  let promises = lista.map(fn);
  return Promise.all(promises);
}

run(range, fn)
  .then(console.log)
  .catch(console.log);
