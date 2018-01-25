const arrowFn = require("./arrowFn");

// Base Case
let str0 = "[Hello,arrow,functions] becomes \"Haf\"";

test("Base case", ()=>{
	expect(arrowFn("Hello", "arrow", "functions")).toBe(str0);
});

// Empty String
let str1 = "[] becomes \"undefined\"";
test("Empty String: ", ()=> {
	expect(arrowFn("")).toBe(str1);
});

// 4 arguments
let str2 = "[my,name,is,siddharth] becomes \"mnis\"";

test("With 4 arguments: ", ()=> {
	expect(arrowFn("my", "name", "is", "siddharth")).toBe(str2);
});

// first alphabet mix of lower and upper case
let str3 = "[My,name,Is,siddharth] becomes \"MnIs\"";

test("first alphabet mix of lower and upper case: ", ()=> {
	expect(arrowFn("My", "name", "Is", "siddharth")).toBe(str3);
});
