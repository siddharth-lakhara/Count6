function template(name) {
	let str = `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;

	//console.log(str);
	return str;
}

module.exports = template;
