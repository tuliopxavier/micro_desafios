// Micro desafio - Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

// Micro desafio - Passo 2

// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.


function criarAluno(name, quantidadeDeFaltas, notas) {
    return {
        nome: `${name}`,
        quantidadeDeFaltas: quantidadeDeFaltas,
        notas: notas,
        calcularMedia: function() {
            return this.notas.reduce((a,b) => a + b) / this.notas.length
        },
        adicionarFalta: function() {
            this.quantidadeDeFaltas++
        }
    };
};

let nathalia = new criarAluno("nathalia", 2, [9,10]);
let rodrigo = new criarAluno("rodrigo", 1, [7, 9]);
let larissa = new criarAluno("larissa", 1, [9, 9]);
let paulo = new criarAluno("paulo", 1, [7.5, 9]);
let cabuto = new criarAluno("cabuto", 1, [7, 7]);

module.exports = [nathalia, rodrigo, larissa, paulo, cabuto];
