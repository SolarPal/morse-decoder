const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	const charSize = 10;
	let chars = [];
	for (let i = 0; i < expr.split("").length / charSize; i += 1) {
		chars.push(expr.split("").slice(i * charSize, i * charSize + charSize));
	}
	
	function readChar(ch, mapKV) {
		if (ch[0] === "*") {
			return " ";
		} else {
			let resCh = "";
			for (let i = 0; i < ch.length; i += 2) {
				if (ch[i] + ch[i + 1] === "00") {
					continue;
				} else if (ch[i] + ch[i + 1] === "10") {
					resCh += ".";
				} else if (ch[i] + ch[i + 1] === "11") {
					resCh += "-";
				}
			}
			return mapKV[resCh];
		}
	}
	
	let resExpr = "";
	
	for (let i = 0; i < chars.length; i += 1) {
		resExpr += readChar(chars[i], MORSE_TABLE);
	}
	
	return resExpr;
}

module.exports = {
    decode
}