const carrinho = document.getElementById('produtos')
const produtos = JSON.parse(localStorage.getItem('produto'))
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
        valorDoProduto.textContent = produto.valor
        div.appendChild(nomeDoProduto)
        div.appendChild(valorDoProduto)

        carrinho.appendChild(div)
    }
}

window.onload = () => atualizaCarrinho()