const avg = require('./rest');

test('Base case: ',()=>
	expect(avg(1,2,3,4,5)).toBe(3)
);

test('Single length array: ',()=>
	expect(avg(1)).toBe(1)
);

test('One object undefined: ', ()=>
	expect(avg(1,2,3,undefined,2)).toBe(2));

test('null: ', ()=>
	expect(avg(1,2,3,null,2)).toBe(2));
