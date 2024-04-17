
const pegarProdutos = async () => {
    const resposta = await fetch('js/jason.json')
    const data = await resposta.json()
    return data
}
  
const gerarCard = async() =>{
    const produtos = await pegarProdutos()

produtos.map((produtes) => {
//console.log(produto)
let card = document.createElement('card')
card.classList.add('.card__produto')
card.innerHTML =
`
<figure>   
<img src="imagens/images/images/${produtes.image}" alt=""/>
</figure>
<div class="card__produto_detalhes">       
<h4> $ {produtes_name}</h4>
<h5> $ {produtes_model}</h5>


<h6>$ {produtes_price}</h6>
</div> 
`
const listaProdutos = document.querySelector('.lista__produtos')
listaProdutos.appendChild(card)

})
}
gerarCard ()