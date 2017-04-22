// Generator

'use strict'

import randAsync from './lib/async'
import out from './lib/out'

function getAll(res) {
	return res
}

function serie(makeGenerator) {
	return (...args) => {
		const generator = makeGenerator(...args)

		function handle(result) {
			if (result.done) {
				return Promise.resolve(result.value)
			}

			return Promise
				.resolve(result.value)
				.then(res => handle(generator.next(res)))
				.catch(err => handle(generator.throw(err)))
		}

		try {
			return handle(generator.next())
		} catch (err) {
			return Promise.reject(err)
		}
	}
}

function * gen(arr) {
	const ps = []
	for (const v of arr) {
		ps.push(yield randAsync(v).then(getAll).catch(getAll))
		console.log(v)
	}
	return ps
}

console.log('Executando em série...')
serie(gen)([1, 2, 3, 4, 5])
	.then(out)
	.catch(out)
