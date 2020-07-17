'use strict'

let array;
const findLongestWord = function(string) {
    const array = string.split(' ');
    
    let longWord = '';
    for(let arr of array){
        if(arr.length > longWord.length){
            longWord = arr;
        }
    }
    return longWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
