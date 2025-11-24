class Produto {
    constructor(nome, valor, botao){
        this.nome = nome
        this.valor = valor
        this.botao = botao
    }
}

const cards = document.getElementsByClassName('cartao')

let produtosNoCarrinho = []
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
            
            produtosNoCarrinho.push(new Produto(nome.textContent, valor.textContent, botoes))
            console.log(produtosNoCarrinho)
            localStorage.setItem("produto", JSON.stringify(produtosNoCarrinho))
        })


    }
}