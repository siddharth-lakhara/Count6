console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(msg, ...escString) {
	let resultString = msg[0];
	for (let i=0; i<escString.length; i++){
		resultString += conv(escString[i]) + msg[i+1];
	}
	return resultString;
	//return msg[0] + covnertedStrings[0] + msg[1] + convertedStrings[1];
}

function conv(stringToConvert){
	return stringToConvert.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/'/g, "&apos;")
		.replace(/"/g, "&quot;");
}
