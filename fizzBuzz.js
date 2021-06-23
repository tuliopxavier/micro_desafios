// Neste exercício, você terá que criar uma função "FizzBuzz" que recebe dois parâmetros numéricos.
// A função deve atender aos seguintes requisitos:

// Você deve imprimir os números de 1 a 100;

// Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “Fizz” em vez do número correspondente;

// Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra "Buzz" em vez do número correspondente;

// Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “FizzBuzz”.

// Avançado: Como crédito extra, pense em como otimizar seu programa para que as palavras sejam passadas de forma dinâmica e seja você quem decide quais palavras ele deve dizer.

let fizzBuzz = (numA, wordA, numB, wordB) => {

  for (var i = 1; i <= 100; i++) {
    if (i % numA == 0 && i % numB == 0) {
        console.log(wordA, wordB);
    } else if (i % numA == 0 && i % numB != 0) {
      console.log(wordA);
    } else if (i % numB == 0 && i % numA != 0) {
      console.log(wordB);
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(7, 'Fizz', 5, 'Buzz');
