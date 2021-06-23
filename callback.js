// Micro desafios

// Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

let acaoCarro = (acao) => console.log(acao);
function andar() { return 'O carro está andando'; }
function parar() { return 'O carro parou'; }

acaoCarro(andar());
acaoCarro(parar());



// let acaoCarro = (acao) => acao();
// function andar() { console.log('O carro está andando'); }
// function parar() { console.log('O carro parou'); }

// acaoCarro(andar);
// acaoCarro(parar);
