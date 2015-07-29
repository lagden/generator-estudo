/* Exemplo Serie D
 *
 * Mesmo que o Exemplo Serie A, mas o ciclo não é interrompido se alguma
 * Promessa (Promise) for rejeitada (reject).
 *
 * O método `getAll` faz o tratamento!
 */

'use strict';

import _ from 'lodash';
import series from 'co-series';
import {async} from './lib/async';

let range = _.range(1, 11);
let total = range.length;
let cc = 0;

function getAll(res) {
  return res;
}

function fn(v) {
  console.log(`${++cc} of ${total} - ${v}`);
  return async(v).then(getAll).catch(getAll);
}

function runSeries(lista, fn) {
  return Promise.all(lista.map(series(fn)));
}

runSeries(range, fn)
  .then(console.log)
  .catch(console.log);
