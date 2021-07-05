// exemplos de aplicação do método map()

let letrasMinusculas = ['a','b','c','d'];
console.log(letrasMinusculas);

let letrasMaiusculas = letrasMinusculas.map(letras => letras.toUpperCase());
console.log(letrasMaiusculas);

// outro exemplo de map() 

let salarios = [1050.75, 2000.78, 5000.98, 7500.89];
console.log(salarios);

let salariosAtualizados = salarios.map(salario => salario * 1.4);
console.log(salariosAtualizados.toFixed(2));
