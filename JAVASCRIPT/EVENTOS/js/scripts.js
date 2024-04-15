// 1 - ACIONANDO EVENTOS
const btn = document.querySelector('#my-button')

btn.addEventListener('click', function() {
    console.log('Clicou!')
})



// 2 - REMOVENDO EVENTO
const secondBtn = document.querySelector('#btn')

function imprimirMensagem() { //aqui criei uma função (isso é opcional) pra executar durante o evento
    console.log('Teste')
}

secondBtn.addEventListener('click', imprimirMensagem) //aqui o 2o argumento esta sem () para ela ser executada apenas ao clique

//para remover o evento não pode ser uma função anonima, ela deve ter um nome (nesse exemplo imprimirMensagem)

const thirdBtn = document.querySelector('#other-btn') //selecionei o elemento

thirdBtn.addEventListener('click', () => {
    console.log('Evento Removido!')
    secondBtn.removeEventListener('click', imprimirMensagem)
})



// 3 - ARGUMENTO DO EVENTO (todo evento possui um argumento especial que contem informações do mesmo. Geralmente chamado de 'event' ou 'e')
//No exemplo abaixo o evento vai me retornar um objeto cheio de propriedades que posso usar a meu favor
const myTitle = document.querySelector('#my-title')

myTitle.addEventListener('click', (event) => {
    console.log(event)
})