// Generator

'use strict';

// Exemplo A

function * soma() {
	let r = 0;
	while (r < 10) {
		yield r++; // Faz uma pausa até chamar o próximo `next()`
	}
}

const r = [];
const iteratorA = soma();
let nextA;

while ((nextA = iteratorA.next()).done === false) {
	r.push(nextA.value);
}

console.log('Exemplo A');
console.log(r.join(', '));
console.log('-------------------------');

// -------------------------

// Exemplo AA
// Utilizando o método `soma` acima.

const rA = [];
for (const v of soma()) { // chama o next()
	rA.push(v);
}

console.log('Exemplo AA');
console.log(rA.join(', '));
console.log('-------------------------');

// -------------------------

// Exemplo B

function * gen() {
	yield 'a';
	const r = yield 'b';
	return r;
}

const iteratorB = gen();

console.log('Exemplo B');
console.log(iteratorB.next());
console.log(iteratorB.next());
console.log(iteratorB.next('c'));
console.log('-------------------------');

// -------------------------

// Examplo C

function * foo(x) {
	const y = 2 * (yield (x + 1));
	const z = yield (y / 3);
	return x + y + z;
}

const it = foo(5);

console.log('Exemplo C');
console.log(it.next());
console.log(it.next(12));
console.log(it.next(1000));
console.log('-------------------------');

// -------------------------
