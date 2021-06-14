var nomeJogador = " ";
var golsJogador = 0;
var precoEmDolares = 0;

function fazerGol() {
  golsJogador++;
  precoEmDolares += 10000;
  console.log("GOL!!!!!!");
  console.log(golsJogador);
  console.log(precoEmDolares);
}

function hatTrick() {
  fazerGol();
  fazerGol();
  fazerGol();
  precoEmDolares *= 1.1;
}

hatTrick();
console.log(precoEmDolares);
