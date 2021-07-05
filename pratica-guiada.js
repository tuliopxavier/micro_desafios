const produtos = [
      {
        nome: "Produto 1",
        valor: 125,
        qualidade: 70,
        status: false
      },
      {
        nome: "Produto 2",
        valor: 1305,
        qualidade: 100,
        status: true
      },
      {
        nome: "Produto 3",
        valor: 758,
        qualidade: 64,
        status: true
      }
];

const carrinho = produtos.filter((produto) => {

      const valor = produto.valor
      const qualidade = produto.qualidade
      const status = produto.status
      const selecionado = (valor >= 482 && valor <= 1600) && (qualidade >= 60) && (status == true)
      
      return selecionado
})



carrinho.forEach((produto) => {
      console.log("Produto: ", produto.nome)
      console.log("Valor: ", produto.valor)
      console.log("------------------------")
})

const total = carrinho.reduce((acumulador, produto) => {
      return acumulador.valor + produto.valor
})
    console.log("Total: ", total)
