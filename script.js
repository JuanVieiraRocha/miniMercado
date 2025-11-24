class Produto {
    constructor(nome, valor, classe){
        this.nome = nome
        this.valor = valor
        this.classe = classe
    }
}

//IDS' da tela de inicio
const cards = document.getElementsByClassName('cartao')
const carrinho = document.getElementById('produtos')
const abrir = document.getElementById('Adicionar')

//ID's da modal
const fechar = document.getElementById('fechar')
const modalDeCriarProduto = document.getElementById('criarProduto')
const enviar = document.getElementById('enviar')
const nome = document.getElementById('nome')
const valor = document.getElementById('valor')
const comida = document.getElementById('alimento')
const bebida = document.getElementById('liquido')
const limpeza = document.getElementById('limpo')

//ID's das sessões
const alimenticios = document.getElementById('comida')
const liquidos = document.getElementById('bebida')
const limpo = document.getElementById('limpeza')

let produtosNoCarrinho = []
localStorage.setItem("produto", JSON.stringify(produtosNoCarrinho))
let produtos = []
localStorage.setItem('loja', JSON.stringify(produtos))

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


// Funções de adicionar produtos à loja
function adicionarProdutoALoja(nome){
    let produtos = JSON.parse(localStorage.getItem('loja')) || []
    console.log = produtos
    let produtoEscolhido
    for(produto of produtos){
        if(produto.nome == nome){
            produtoEscolhido = produto
            break
        }
    }
    let card = document.createElement('div')
    let nam = document.createElement('p')
    let preco = document.createElement('b')
    let adiciona = document. createElement('button')

    card.className = 'cartao'
    nam.textContent = produto.nome
    preco.textContent = produto.valor
    adiciona.textContent = 'Adicionar ao carrinho'

    card.appendChild(nam)
    card.appendChild(preco)
    card.appendChild(adiciona)
    alimenticios.appendChild(card)

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
    let produtos = JSON.parse(localStorage.getItem('loja')) || []
    let novoProduto;
    if(comida.checked){
        novoProduto = new Produto(nome.value, valor.value, comida.value)
    }
    if(bebida.checked){
        novoProduto = new Produto(nome.value, valor.value, bebida.value)
    }
    if(limpeza.checked){
        novoProduto = new Produto(nome.value, valor.value, bebida.value)
    }

    produtos.push(novoProduto)
    localStorage.setItem('loja', JSON.stringify(produtos))
    modalDeCriarProduto.close()
    modalDeCriarProduto.style.display = 'none'
    adicionarProdutoALoja(novoProduto.nome)
    nome.value = ''
    valor.value = ''
    bebida.checked = false
    comida.checked = false
    limpeza.checked = false
})