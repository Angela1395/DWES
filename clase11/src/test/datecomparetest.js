const test = require('ava');
const dateCompare = require('../src/date-comparer');

test('Devuelve la fecha menor y mayor', t => {
    const date1 = '29-04-1983';
    const date2 = '17-03-2003';
    const result = dateCompare(date1, date2);
    t.is(result, { date1, date2 });
});