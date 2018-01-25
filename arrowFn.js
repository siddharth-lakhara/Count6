let inputs = process.argv.slice(2);
let result = inputs.map(elem => elem[0])
	.reduce((prev, curr) => prev + curr);
console.log(`[${inputs}] becomes "${result}"`);

function arrowFn(){
	let inputs = Array.prototype.slice.call(arguments);
	let result = inputs.map(elem => elem[0])
		.reduce((prev, curr) => prev + curr, "");
	return `[${inputs}] becomes "${result}"`;
}

module.exports = arrowFn;
