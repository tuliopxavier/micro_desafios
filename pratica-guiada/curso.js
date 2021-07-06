// Micro desafio - Passo 3

// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

// Micro desafio - Passo 4

// Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

// Micro desafio - Passo 5

// Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

// Micro desafio - Passo 6

// Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.

// Micro desafio - Passo 7

// Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).

const [nathalia, rodrigo, larissa, paulo, cabuto] = require("./estudantes")


const curso = {
    nomeDoCurso: " ",
    notaDeAprovacao: 8,
    faltasMaximas: 2,
    listaDeEstudantes: [],
    adicionarAluno: function(aluno) {
       return this.listaDeEstudantes.push(aluno);
    },
    aprovacao: function(aluno) {
        let notaMedia = aluno.calcularMedia();
        if (aluno.quantidadeDeFaltas = this.faltasMaximas && notaMedia >= this.notaDeAprovacao * 1.1){
            return true;
        } else if (aluno.quantidadeDeFaltas <= this.faltasMaximas && notaMedia > this.notaDeAprovacao){
            return true;
        }   else { return false; }
    },
    verificarAprovacao: function() {
        return this.listaDeEstudantes.reduce((acc, item) => {
            console.log(acc[item.nome] = this.aprovacao(item));
        }, {});
        // console.log(curso.listaDeEstudantes.map( item => this.aprovacao(item)));
    }
};

curso.adicionarAluno(nathalia);
curso.adicionarAluno(rodrigo);
curso.adicionarAluno(larissa);
curso.adicionarAluno(paulo);
curso.adicionarAluno(cabuto);

console.log(curso.verificarAprovacao());