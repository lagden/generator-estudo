'use strict';

import _ from 'lodash';
import co from 'co';
import consulta from 'io-cep';
import Table from 'cli-table';

// Ceps
let ceps = [
  '70150907',
  '70200690',
  '70200901',
  '70237190',
  '70238010',
  '70253000',
  '70255120',
  '70293000',
  '70298400',
  '70300903',
  '70304906',
  '70305918',
];

function * doIt(item) {
  return yield consulta(item);
}

function * getCeps(lista) {
    let results = yield lista.map(doIt);
    return results;
  }

function run(lista) {
  return co(getCeps(lista));
}

function render(results) {
  let ignore = ['success', 'cliente'];
  let h = _.chain(results)
           .first()
           .keys()
           .remove(n => ignore.indexOf(n) === -1)
           .value();
  let tbl = new Table({
    head: h,
  });
  results.map(item => {
    tbl.push(h.map(k => item[k] || ''));
  });
  process.stdout.write(tbl.toString() + '\n\n');
  process.exit(0);
}

function zuou(err) {
  process.stdout.write(err + '\n\n');
  process.exit(1);
}

run(ceps)
  .then(render)
  .catch(zuou);
