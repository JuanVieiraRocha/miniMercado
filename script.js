class Produto {
    constructor(nome, valor, botao){
        this.nome = nome
        this.valor = valor
        this.botao = botao
    }
}

const cards = document.getElementsByClassName('cartao')
const carrinho = document.getElementById('produtos')

let produtosNoCarrinho = []
localStorage.setItem("produto", JSON.stringify(produtosNoCarrinho))
let produtos

if(cards){
    for (let card of cards) {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "scale(1.5)";
            card.style.zIndex = "10";
        })

        card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
        card.style.zIndex = "1";
            
        })
        let botoes = card.querySelector("button")
        let valor = card.querySelector("b")
        let nome = card.querySelector("p")

        botoes.addEventListener('click', () => {
            
            let novoProduto = new Produto(nome.textContent, valor.textContent)
            adicionarAoCarrinho(novoProduto)
            console.log(produtosNoCarrinho)
        })


    }
} //aumenta cards, soma cards

function adicionarAoCarrinho(produto){
    let produtosNoCarrinho = JSON.parse(localStorage.getItem("produto")) || [];
    produtosNoCarrinho.push(produto)
    localStorage.setItem('produto', JSON.stringify(produtosNoCarrinho))
}









// function atualizaCarrinho(){

//     let produtosNoCarrinho = JSON.parse(localStorage.getItem("produto"))
//     for(produto of produtosNoCarrinho){
//         let div = document.createElement('div')
//         let nomeDoProduto = document.createElement('p')
//         let valorDoProduto = document.createElement('p')

//         div.className = 'produto'
//         div.appendChild(nomeDoProduto)
//         div.appendChild(valorDoProduto)

//         carrinho.appendChild(div)
//     }
// }