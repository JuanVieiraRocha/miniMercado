const carrinho = document.getElementById('produtos')
const produtos = JSON.parse(localStorage.getItem('produto'))
const valorTotal = document.getElementById("valorTotal")
console.log(produtos)
//função para atualizar o carrinho
function atualizaCarrinho(){
    let produtosNoCarrinho = JSON.parse(localStorage.getItem("produto"))
    for(produto of produtosNoCarrinho){
        let div = document.createElement('div')
        let nomeDoProduto = document.createElement('p')
        let valorDoProduto = document.createElement('p')

        div.className = 'produto'
        nomeDoProduto.textContent = produto.nome
        valorDoProduto.textContent = "R$ " + produto.valor
        div.appendChild(nomeDoProduto)
        div.appendChild(valorDoProduto)

        carrinho.appendChild(div)
    }
    somarTotal()
}

// Somar os valores do carrinho
function somarTotal(){
    let produtosNoCarrinho = JSON.parse(localStorage.getItem('produto')) || []
    let total = 0
    if(produtosNoCarrinho){
        for(produto of produtosNoCarrinho){
            total += parseInt(produto.valor)
        }
    }
    valorTotal.textContent = total
}

window.onload = () => atualizaCarrinho()
