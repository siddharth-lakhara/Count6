const destruct = require('./destruct');

{
	let argArray = ['siddharth', 'siddharth.lakhara', 'siddharth.lakhara@gmail.com', '20', 'Siddharth', 'Lakhara'];
	test('Base Case: ', ()=>
		expect(destruct(argArray)).toEqual({
			username: 'siddharth.lakhara',
			email: 'siddharth.lakhara@gmail.com'
		})
	);
}

{
	let argArray = ['siddharth', '_!23!@#', '', '20', 'Siddharth', 'Lakhara'];
	test('One empty string and other special character string: ', ()=>
		expect(destruct(argArray)).toEqual({
			username: '_!23!@#',
			email: ''
		})
	);
}

{
	let argArray = ['siddharth', undefined, '20', 'Siddharth', 'Lakhara'];
	test('Testing with one object undefined: ', ()=>
		expect(destruct(argArray)).toEqual({
			username: undefined,
			email: '20'
		})
	);
}

{
	let argArray = ['siddharth', undefined, '20', 'Siddharth', 'Lakhara'];
	test('passing undefined: ', ()=>
		expect(destruct(argArray)).toEqual(undefined)
	);
}
