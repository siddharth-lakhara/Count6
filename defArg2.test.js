const argFn = require('./defArg2.js');

test('Check default arguments: ', ()=>
	expect(argFn('sid')).toBe('sid!!!')
);

test('Adding 5 exclaimation: ', ()=>
	expect(argFn('sid', 5)).toBe('sid!!!!!')
);

test('Testing with null: ', ()=>
	expect(argFn('sid', null)).toBe('sid')
);

test('Invoking default argument with undefined: ', ()=>
	expect(argFn('sid', undefined)).toBe('sid!!!')
);
