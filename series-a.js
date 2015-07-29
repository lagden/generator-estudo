/* Exemplo Serie A
 *
 * Nesse exemplo utilizei o `Promise.all`, que executa um array de
 * promises em parelelo, mas é tranformado em execução serial pela
 * biblioteca `co-series`.
 *
 * Se alguma Promessa (Promise) for rejeitada (reject),
 * o ciclo é interrompido e a captura (catch) é disparado.
 */

'use strict';

import _ from 'lodash';
import series from 'co-series';
import {async} from './lib/async';

let range = _.range(1, 11);
let total = range.length;
let cc = 0;

function fn(v) {
  console.log(`${++cc} of ${total} - ${v}`);
  return async(v);
}

function runSeries(lista, fn) {
  return Promise.all(lista.map(series(fn)));
}

runSeries(range, fn)
  .then(console.log)
  .catch(console.log);
