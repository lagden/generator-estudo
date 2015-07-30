// Generator

'use strict';

import {async as promessa} from './lib/async';

function async(makeGenerator) {
  return function() {
    let generator = makeGenerator.apply(this, arguments);

    function handle(result) {
      if (result.done) {
        return Promise.resolve(result.value);
      }

      return Promise.resolve(result.value).then(function(res) {
        return handle(generator.next(res));
      }, function(err) {
        return handle(generator.throw(err));
      });
    }

    try {
      return handle(generator.next());
    } catch (ex) {
      return Promise.reject(ex);
    }
  };
}

console.log('Executando em série...');
async(function* (arr) {
  let ps = [];
  for (let v of arr) {
    ps.push(yield promessa(v));
  }
  return ps;
})([1, 2, 3, 4, 5]).then(function(data) {
  console.log('-------------------------');
  console.log('Exemplo A');
  console.log(data.join(', '));
  console.log('-------------------------');
}).catch(function(err){
  console.log('-------------------------');
  console.log('Exemplo A');
  console.log(`Err: ${err}`);
  console.log('-------------------------');
});

// -------------------------
