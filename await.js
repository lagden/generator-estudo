/* Exemplo Await
 *
 * ES7 features
 */

'use strict';

import _ from 'lodash';
import deasync from 'deasync';
import {randAsync as promessa} from './lib/async';

const range = _.range(1, 5);
const sleep = deasync((timeout, done) => {
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
		const p = await Promise.all(arr.map(fn));
		console.log(p.join(', '));
	} catch (err) {
		console.log(err);
	}
}
paralelo(fn, range);

sleep(2000);
console.log('---------------');

// Série
console.log('Executando em série...');

async function serie(fn, arr) {
	try {
		const s = [];
		for (const v of arr) {
			s.push(await fn(v));
		}
		console.log(s.join(', '));
	} catch (err) {
		console.log(err);
	}
}

serie(fn, range);
