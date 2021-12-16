const test = require('ava');
const fizzBuzz = require('../src/fizzbuzz');

test('Debería devolver 1', t => {
    const result = fizzBuzz(1);
    t.is(result, 1);
});

test('Debería devolver fizz', t => {
    const result = fizzBuzz(3);
    t.is(result, 'fizz');
});

test('Debería devolver buzz', t => {
    const result = fizzBuzz(5);
    t.is(result, 'buzz');
});

test('Debería devolver fizzbuzz', t => {
    const result = fizzBuzz(15);
    t.is(result, 'fizzbuzz');
});