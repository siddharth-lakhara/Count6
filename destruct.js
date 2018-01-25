function destructure(argArray){
// let userArray = process.argv.slice(2);
	if (typeof argArray === undefined)
		return undefined;
		
	let userArray = argArray;
	let [,username, email] = userArray;
	let outArray = {
		username: username,
		email: email
	};
	//console.log(outArray);
	return outArray;
}

module.exports = destructure;
