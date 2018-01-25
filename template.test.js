const temp = require('./template');

// Base Case
let str0 = `Hello, Siddharth!
Your name lowercased is "siddharth".`;

test('Correct output for Siddharth', ()=>{
	expect(temp('Siddharth')).toBe(str0);
});

// Empty String
let str1 = `Hello, !
Your name lowercased is "".`;

test('Empty String: ', ()=> {
	expect(temp('')).toBe(str1);
});

// all caps String
let str2 = `Hello, ABC!
Your name lowercased is "abc".`;

test('Empty String: ', ()=> {
	expect(temp('ABC')).toBe(str2);
});

// all lower cased string
let str3 = `Hello, abc!
Your name lowercased is "abc".`;

test('Empty String: ', ()=> {
	expect(temp('abc')).toBe(str3);
});
