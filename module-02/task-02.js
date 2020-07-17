'use strict'

let message;
let pricePerWord;
const calculateEngravingPrice = function(message, pricePerWord){
    console.log(message, pricePerWord);
    const array = message.split(' ');
    const result = (Number(array.length) * Number(pricePerWord));
    return result;
}
console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80
