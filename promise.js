let dadosConexaoJson = '{"server":"192.168.0.1","login":"admin","senha":123 }';

let dadosConexaoJS = JSON.parse(dadosConexaoJson);

let vserver = "192.168.0.1";
let vlogin = "admin";
let vsenha = 1234;
let dadosDaConexao = {vserver, vlogin, vsenha}

let conexao = false;

if (dadosConexaoJS.server == vserver && dadosConexaoJS.login == vlogin && dadosConexaoJS.senha == vsenha) {
    conexao = true;
} else {
    conexao = false;
}

// Promise 

const promessa = new Promise((resolve, reject) => {
    console.log('Requisição em andamento...')
    setTimeout(() => {
        if(conexao == false) {
            reject('ACESSO NEGADO - SERVER NÃO CONECTADO')
        } else {
            resolve(JSON.stringify(dadosDaConexao))
        }
    }, 3000)
});

promessa.then((resolve) => {
    const dados = JSON.parse(resolve);
    console.log(dados);
}).catch((reject) => {
    console.log(reject)
})
