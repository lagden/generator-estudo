// Generator

'use strict';

import {randAsync} from './lib/async';

function async(makeGenerator) {
	return (...args) => {
		const generator = makeGenerator.apply(this, args);

		function handle(result) {
			if (result.done) {
				return Promise.resolve(result.value);
			}

			return Promise
				.resolve(result.value)
				.then(res => handle(generator.next(res)))
				.catch(err => handle(generator.throw(err)));
		}

		try {
			return handle(generator.next());
		} catch (err) {
			return Promise.reject(err);
		}
	};
}

console.log('Executando em série...');
async(function * (arr) {
	const ps = [];
	for (const v of arr) {
		ps.push(yield randAsync(v));
		console.log(v);
	}
	return ps;
})([1, 2, 3, 4, 5]).then(data => {
	console.log('-------------------------');
	console.log('Exemplo A');
	console.log(data.join(', '));
	console.log('-------------------------');
}).catch(err => {
	console.log('-------------------------');
	console.log('Exemplo A');
	console.log(`Err: ${err}`);
	console.log('-------------------------');
});
