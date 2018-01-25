function min(...num){
	console.log('num: ', num);
	let numFiltered = removeItem(num);
	console.log('numFiltered: ', numFiltered);
	let min = Math.min(...numFiltered);
	if (min === Infinity)
		min = 0;

	return `The minimum of [${numFiltered}] is ${min}`;
}

function removeItem(arr){
	{
		let index = arr.indexOf(null);
		if (index > -1)
			arr.splice(index, 1);
	}

	{
		let index = arr.indexOf(undefined);
		if (index > -1)
			arr.splice(index, 1);
	}

	return arr;
}

module.exports = min;

// test

// Base case:
// [1,2,3,4,5]

// One Object empty:
// [1,2,,4,5];

// empty array
// []

// all elemnts are same


// one object undefined
// [1,undefined, 3,4,5];
