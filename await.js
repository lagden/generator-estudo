/* global async, await */
/* Exemplo Await
 *
 * ES7 features
 */

'use strict';

import _ from 'lodash';
import deasync from 'deasync';
import {async as promessa} from './lib/async';

let range = _.range(1, 5);
let sleep = deasync((timeout, done) => {
  setTimeout(done, timeout);
});


function fn(v) {
  console.log(v);
  return promessa(v);
}

// Paralelo
console.log('Executando em paralelo...');

async function paralelo(fn, arr) {
  try {
    let p = await* arr.map(fn);
    console.log(p.join(', '));
  } catch(err) {
    console.log(err);
  }
}
paralelo(fn, range);

sleep(2000);
console.log('---------------');

// Série
console.log('Executando em série...');

(async (fn, arr) => {

  try {
    let s = [];
    for (let v of arr) {
      s.push(await fn(v));
    }
    console.log(s.join(', '));
  } catch(err) {
    console.log(err);
  }
}(fn, range));
