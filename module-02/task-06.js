'use strict'

let input;
const numbers = [];
do{
    input = prompt('Введите число');
    numbers.push(input)
} while(input !== null)
console.log (numbers);

let total = 0;

if(numbers.length === 0){
    console.log('Пусто')
}else{
for(let arr of numbers){
    total += Number(arr);
}
console.log(`Общая сумма чисел равна ${total}`);

}
