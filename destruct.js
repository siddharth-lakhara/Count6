let userArray = process.argv.slice(2);
let [,username, email] = userArray;
let outArray = {
	username: username,
	email: email
};
console.log(outArray);
