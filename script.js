class Produto {
    constructor(nome, valor, classe){
        this.nome = nome
        this.valor = valor
        this.classe = classe
    }
}

const cards = document.getElementsByClassName('cartao')
const carrinho = document.getElementById('produtos')
const abrir = document.getElementById('Adicionar')
const fechar = document.getElementById('fechar')
const modalDeCriarProduto = document.getElementById('criarProduto')
const enviar = document.getElementById('enviar')

let produtosNoCarrinho = []
localStorage.setItem("produto", JSON.stringify(produtosNoCarrinho))
let produtos = []

if(cards){
    for (let card of cards) {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "scale(1.2)";
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
} //adiciona as funções aos cards

function adicionarAoCarrinho(produto){
    let produtosNoCarrinho = JSON.parse(localStorage.getItem("produto")) || [];
    produtosNoCarrinho.push(produto)
    localStorage.setItem('produto', JSON.stringify(produtosNoCarrinho))
} // adiciona itens ao array de carrinho

//função de adicionar produtos à loja
const nome = document.getElementById('nome')
const valor = document.getElementById('valor')
const comida = document.getElementById('alimento')
const bebida = document.getElementById('liquido')
const limpeza = document.getElementById('limpo')



function adicionarProdutoALoja(){

}

abrir.addEventListener('click', () =>{
    modalDeCriarProduto.showModal()
    modalDeCriarProduto.style.display = 'flex'
})
fechar.addEventListener('click', () =>{
    modalDeCriarProduto.close()
    modalDeCriarProduto.style.display = 'none'
    nome.value = ''
    valor.value = ''
    bebida.value = ''
    comida.value = ''
    limpeza.value = ''
})
enviar.addEventListener('click', () =>{

})