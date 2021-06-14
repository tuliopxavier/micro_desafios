// arrow function e callback

let somar = (numA, numB) => numA + numB;
let subtrair = (numA, numB) => numA - numB;
let multiplicar = (numA, numB) => numA * numB;
let dividir = (numA, numB) => numB != 0 ? numA / numB : 'Impossível dividir por zero.';

let calcular = (numA, numB, operacao) => operacao(numA, numB);

console.log(calcular(10,2,somar));
console.log(calcular(10,2,subtrair));
console.log(calcular(10,2,multiplicar));
console.log(calcular(10,2,dividir));
console.log(calcular(10,0,dividir));
