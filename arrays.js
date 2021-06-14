// O líder técnico da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
// Criar um arquivo arrays.js que contenha o código:
// let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"]
// Verificamos se tudo funciona bem se solicitarmos o segundo elemento do array e for "clube da luta".
let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];
console.log(filmes[1] == 'clube da luta' ? `Tudo certo!` : `Algo está errado.`);

// No mesmo arquivo, coloque todos os elementos em letras MAIÚSCULAS utilizando  .toUpperCase() para cada elemento.
function arrayToUpperCase(array){
    let toUpperCase = [];
    for (let i = 0; i < array.length; i++){
        toUpperCase.push(array[i].toUpperCase());
    }
    array.length = 0
    for (let i = 0; i < toUpperCase.length; i++){
        array.push(toUpperCase[i]);
    }
}

arrayToUpperCase(filmes);
console.log(filmes);

// Enquanto trabalhava no exercício 2, descobrimos que também há outro array no código, mas com filmes animados. 
// let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]
// No mesmo arquivo, crie este array e uma função que adiciona cada elemento do array de desenhos animados (cartoons) ao array de filmes. 
// Um dos desenvolvedores avisou que a última animação é na verdade um jogo, então remova esse último elemento do array de desenhos animados (cartoons) antes de passá-los para os filmes.
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];
cartoons.pop();

function filmesPush(array){
    for (let i = 0; i < array.length; i++) {
        filmes.push(array[i]); 
    }
}

arrayToUpperCase(cartoons);
filmesPush(cartoons);
console.log(filmes);

// Por fim, eles nos enviam dois arrays com as avaliações feitas por diferentes usuários do mundo desses filmes, da seguinte forma:
// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 
// Eles nos pedem para criar uma função que compare as notas e nos diga se elas são iguais ou diferentes. Eles confirmam que estão na respectiva ordem e que trazem apenas valores numéricos de 1 a 10.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];

function compararNotas(array1,array2){
    for (var i = 0; i < array1.length; i++){
        if (array1[i] == array2[i]){
            console.log(`Índices ${[i]} são iguais.`)
        } else {
            console.log(`Índices ${[i]} são diferentes.`)
        }
    }
}

compararNotas(asiaScores,euroScores);

// Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções e testar seu funcionamento correto.
// Se chegarmos a este ponto e tudo estiver bem, o líder técnico da equipe deve estar extremamente feliz com nosso trabalho e desempenho. Bom trabalho!
// Até a próxima!
