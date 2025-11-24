const cards = document.getElementsByClassName('cartao')

let produtosNoCarrinho = []

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

    botoes.addEventListener('click', () => {
        produtosNoCarrinho.push(card)
        console.log(produtosNoCarrinho)
        localStorage.setItem("produto", JSON.stringify(produtosNoCarrinho))
    })
}