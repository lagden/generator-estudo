/* Exemplo Await
 *
 * ES7 features
 */

'use strict';

import _ from 'lodash';
import deasync from 'deasync';
import {randAsync} from './lib/async';
import {out} from './lib/out';

const range = _.range(1, 5);
const sleep = deasync((timeout, done) => {
	setTimeout(done, timeout);
});

function helper(v) {
	console.log(v);
	// add flag = false to avoid reject
	return randAsync(v, false);
}

// Paralelo - Promise
console.log('Executando em paralelo...');
async function paralelo(arr, fn) {
	const p = await Promise.all(arr.map(fn));
	console.log('Finalizado...');
	return p;
}
paralelo(range, helper)
	.then(out)
	.catch(out);

sleep(2000);
console.log('---------------');

// Série - Try / Catch
console.log('Executando em série...');
async function serie(arr, fn) {
	try {
		const s = [];
		for (const v of arr) {
			s.push(await fn(v));
		}
		console.log('Finalizado...');
		out(s);
	} catch (err) {
		out(err);
	}
}
serie(range, helper);
