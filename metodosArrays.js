// Métodos pra manipulação de arrays

let listaDeCompras = ['banana', 'maçã', 'pera', 'laranja', 'abacate']

console.log('Esse é o array original:')
console.log(listaDeCompras);

let join = listaDeCompras.join();
console.log('O método .join() agrupa os elementos do array.')
console.log(join);

let pop = listaDeCompras.pop();
console.log('O método .pop() exclui o último elemento do array.')
console.log(listaDeCompras);

listaDeCompras.push(pop)
console.log('O método .push("parâmetro") insere o parâmetro no final do array')
console.log(listaDeCompras)

let shift = listaDeCompras.shift();
console.log('O método .shift() exclui o primeiro elemento do array.')
console.log(listaDeCompras);

listaDeCompras.unshift(shift);
console.log('O método .unshift("parâmetro") insere o parâmetro no começo do array')
console.log(listaDeCompras);
