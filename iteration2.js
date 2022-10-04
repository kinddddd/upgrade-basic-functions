const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
let longestWord = '';

function findLongestWord(param) {
    for (let i = 0; i < param.length; i++) {
        if (longestWord.length < param[i].length) {
            longestWord = param[i];
        }
    }
    return longestWord;
}



console.log(findLongestWord(avengers));