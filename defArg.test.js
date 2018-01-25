const argFn = require('./defArg');

test('Check default arguments: ',()=>
	expect(argFn()).toBe(0.5)
);

test('Check first default argument: ', ()=>
	expect(argFn(undefined,5)).toBe(2.5)
);

test('Check second default argument: ', ()=>
	expect(argFn(1, undefined)).toBe(1)
);

test('General test case: ', ()=>
	expect(argFn(2,4)).toBe(3)
);

test('With null: ', ()=>
	expect(argFn(null, null)).toBe(0)// passed as (0,0)
);
