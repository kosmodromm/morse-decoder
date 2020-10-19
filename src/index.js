const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {

    let decWords = [];
    decWords.push(expr); //вывод строки в массив
    let codedDecWords = [];
    let decodedWords = [];
    for (i = 0; i < decWords.length; i++) {
        for (j = 0; j < decWords[i].length; j += 10) {
            codedDecWords.push(decWords[i].substring(j, j + 10));
        }
    } //разделение на подмассивы по 10 символов
    for (i = 0; i < codedDecWords.length; i++) {
        let z = codedDecWords[i];
        codedDecWords[i] = codedDecWords[i].replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-'); //удаление нулей и замена цифер на символы морзе
        if (codedDecWords[i] === '**********') {
            decodedWords[i] = ' ';
        } else {
            decodedWords[i] = MORSE_TABLE[codedDecWords[i]];
        } //декодирование символов морзе в буквы
    }
    let result = decodedWords.join(''); //преобразование результата в строку

    return result;
}

module.exports = {
    decode
}