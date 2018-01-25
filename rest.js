module.exports = function average(...num) {
	let total = 0;
	let len = num.length;
	total = num.reduce((prev, curr)=>{
		if (curr === undefined){
			len--;
			return prev+0;
		}
		return prev+curr;
	},0);

	return total/len;
};
