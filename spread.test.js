const spread = require('./spread');

test('Base case: ',()=>
	expect(spread(1,2,3,4,5)).toBe('The minimum of [1,2,3,4,5] is 1')
);

test('One object null: ',()=>
	expect(spread(1,2,null,4,5)).toBe('The minimum of [1,2,4,5] is 1')
);

test('One object undefined: ',()=>
	expect(spread(1,2,undefined,4,5)).toBe('The minimum of [1,2,4,5] is 1')
);

test('Empty array: ',()=>
	expect(spread()).toBe('The minimum of [] is 0')
);
// Base case:
// [1,2,3,4,5]

// One Object empty:
// [1,2,,4,5];

// empty array
// []

// all elemnts are same


// one object undefined
// [1,undefined, 3,4,5];
