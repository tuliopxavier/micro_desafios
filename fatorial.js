// O tech leader da equipe precisa criar um código onde seja calculado o número fatorial de um valor inteiro. Para isto, deveremos:

// Criar uma função que calcula o fatorial usando loop (for);

let fatorialFor = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  } else if (num < 0) {
    return `Não é possível calcular ${num}.`;
  }
  
  let resultadoFor = num;
  for (let i = 1; i < num; i++) {
    resultadoFor *= i;
  }
  return resultadoFor;
};

console.log(fatorialFor(0));
console.log(fatorialFor(1));
console.log(fatorialFor(-5));
console.log(fatorialFor(5));



// Recriar esta mesma função usando loop while (sem o uso de for)

let fatorialWhile = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  } else if (num < 0) {
    return `Não é possível calcular ${num}.`;
  }

  let res = 1;
  let resultadoWhile = () => {
    let i = 1;
    while (i <= num) {
      res *= i;
      i++;
    }
  };
  resultadoWhile(num);
  return res;
};

console.log(fatorialWhile(0));
console.log(fatorialWhile(1));
console.log(fatorialWhile(-5));
console.log(fatorialWhile(5));


// Recriar esta mesma função usando recursividade (sem o uso de for ou while)

let calcularFatorial = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  } else if (n < 0) {
    return `Não é possível calcular ${n}.`;
  }  
  return n * calcularFatorial(n -1 );
};

let fatorialRec = (num) => {
  return calcularFatorial(num);
};

console.log(fatorialRec(0));
console.log(fatorialRec(1));
console.log(fatorialRec(-5));
console.log(fatorialRec(5));