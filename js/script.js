const
	input = findEl('.input'),
	keys = findEl('.key', 'All'),
	blockKeys1 = findEl('.keys-1'),
	blockKeys2 = findEl('.keys-2');

keys.forEach(key => {
	key.addEventListener('click', () => {

		if(key.textContent === '=') {
			if(input.value !== '') {
				return input.value = eval(input.value);
			}
		}

		if(key.textContent === '√') return input.value = Math.sqrt(Number(input.value));

		if(key.textContent === 'sin') return input.value = Math.sin(Number(input.value)) / (Math.PI / 180);
		if(key.textContent === 'cos') return input.value = Math.cos(Number(input.value)) / (Math.PI / 180);
		if(key.textContent === 'tan') return input.value = Math.tan(Number(input.value)) / (Math.PI / 180);
		if(key.textContent === 'asin') return input.value = Math.asin(Number(input.value)) / (Math.PI / 180);
		if(key.textContent === 'acos') return input.value = Math.acos(Number(input.value)) / (Math.PI / 180);
		if(key.textContent === 'atan') return input.value = Math.atan(Number(input.value)) / (Math.PI / 180);

		if(key.textContent === 'e') return input.value = Math.E;

		if(key.textContent === 'PI') return input.value = Math.PI;

		if(key.id === 'key-exp-0' || key.id === 'key-exp-1' || key.id === 'key-exp-2') return input.value = Math.exp(Number(input.value));

		// if(key.id === 'key-x-0' || key.id === 'key-x-1' || key.id === 'key-x-2') return input.value = Math.pow(Number(input.value));

		if(key.textContent === 'rand') {
			let min = 0, max = 10;
			let rand = min + Math.random() * (max + 1 - min);
			rand = Math.floor(rand);
			return input.value = rand;
		}

		if(key.textContent === 'abs') return input.value = Math.abs(Number(input.value));

		if(key.textContent === '3√') return input.value = Math.cbrt(Number(input.value));

		if(key.textContent === 'ceil') return input.value = Math.ceil(Number(input.value));

		if(key.textContent === 'round') return input.value = Math.round(Number(input.value));

		// if(key.textContent === '%') return input.value = Math.round(Number(input.value));


		if(key.textContent === 'C') return input.value = '';

		if(key.id === 'deleteValue' || key.id === 'deleteValueIcon') {
			if(input.value !== '') {
				let strToArray = input.value.split('');

				strToArray.pop();

				return input.value = strToArray.join('');
			}
		}

		if(key.textContent !== '=' && key.textContent !== '...') inputConcatValue(key.textContent);

		if(key.textContent === '...') {
			blockKeys1.classList.toggle('invisible');
			blockKeys2.classList.toggle('invisible');
		}

	});
});

function findEl(selector, All) {
	if( arguments.length === 1) return document.querySelector(selector);
	if( arguments.length === 2 && arguments[1] === 'All') return document.querySelectorAll(selector);
}

function inputConcatValue(value) {
	return input.value += value;
}



// 	key7 = findEl('.key-7'),
// 	key8 = findEl('.key-8'),
// 	key9 = findEl('.key-9'),
// 	keyDivide = findEl('.key-divide'),
// 	keyDel = findEl('.key-del'),
// 	key4 = findEl('.key-4'),
// 	key5 = findEl('.key-5'),
// 	key6 = findEl('.key-6'),
// 	keyMultiply = findEl('.key-multiply'),
// 	keyC = findEl('.key-c'),
// 	key1 = findEl('.key-1'),
// 	key2 = findEl('.key-2'),
// 	key3 = findEl('.key-3'),
// 	keyMinus = findEl('.key-minus'),
// 	key0 = findEl('.key-0'),
// 	keyDot = findEl('.key-dot'),
// 	keyPercent = findEl('.key-percent'),
// 	keyPlus = findEl('.key-plus'),
// 	keyEqually = findEl('.key-equally'),