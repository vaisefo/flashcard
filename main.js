function criaCartao(categoria,pergunta,resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `<div class="cartao-conteudo">
    <h3> ${categoria} </h3>
    
    <div class="cartao-pergunta">
        <p>${pergunta}</p>
        </div>

        <div class="cartao-resposta">
        <p>${resposta}</p>
        </div>
        </div>
        `

        container.appendChild(cartao);

}
