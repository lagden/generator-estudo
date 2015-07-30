'use strict';

import _ from 'lodash';

function async(v) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let x = _.random(0, 10);
      (x % 2) ? resolve(`Good ${v}`) : reject(`Bad ${v}`);
    }, 500);
  });
}

export {async};
