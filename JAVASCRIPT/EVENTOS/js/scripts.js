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



// 4 - PROPAGAÇÃO DE EVENTOS (é raro, mas quando um elemento não é claramente definido, pode haver propagação. Ou seja, um outro elemento ativar um evento que não é o dele)
const containerBtn = document.querySelector('#btn-container')
const btnInsideContainer = document.querySelector('#div-btn')

containerBtn.addEventListener('click', () => {
    console.log('Evento 1')
})

btnInsideContainer.addEventListener('click', (e) => { //add um evento no argumento e invoquei o stoppropagation pra parar de ativar o evento no container pai e no container filho
    e.stopPropagation()
    console.log('Evento 2')
})



// 5 - REMOVENDO EVENTO PADRÃO/DEFAULT (as vezes queremos que um elemento responda de uma forma diferente do que seja o padrão (default). Pra isso usamos o método 'preventDefault)
// Neste exemplo, vou mudar o comportamento de um link. Ao invés dele abrir uma nova página, ele vai me mandar uma msg no console
const a = document.querySelector('a')

a.addEventListener('click', (e) => {
    e.preventDefault()

    console.log('Não abriu a página!')
})



//  6 - EVENTOS DE TECLA (mapeiam ações do teclado. KEYUP ativa quando a tecla é solta; KEYDOWN ativa quando a tecla fica pressionada)
//Neste caso não temos um elemento alvo, é o teclado que vai 'mandar', então podemos aplica-lo em todo o documento
/*
document.addEventListener('keyup', (e) => {
    console.log(`Soltou a tecla: ${e.key}`)
})

document.addEventListener('keydown', (e) => {
    console.log(`Segurou a tecla: ${e.key}`)
})
*/


// 7 - EVENTOS DE MOUSE (mousedown; mouseup; dblclick)
const mouseEvents = document.querySelector('#mouse')

mouseEvents.addEventListener('mousedown', () => {
    console.log('Pressionou o botão')
})

mouseEvents.addEventListener('mouseup', () => {
    console.log('Soltou o botão')
})

mouseEvents.addEventListener('dblclick', () => {
    console.log('Duplo clique')
})



// 8 - EVENTOS ON SCROLL (são eventos disparados no rolar/scroll da tela. Muito utilizados em sites reais com animação de elementos)
window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 200) {
        console.log('Passamos de 200px')
    }
})



// 9 - FOCUS / BLUR (o evento focus é disparado quando focamos em um elemento; e o blur é quando perde o foco do elemento. Muito comum em inputs)
const input = document.querySelector('#my-input')

input.addEventListener('focus', (e) => {
    console.log('Entrou no input')
})

input.addEventListener('blur', (e) => {
    console.log('Saiu do input')
})



// 10 - EVENTO DE CARREGAMENTO
window.addEventListener('load', () => {
    console.log('Carregou a página')
})

/*
Esse exemplo de beforeunload não é uma prática bem vista no meio da programação
window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    e.returnValue = ' '
})
*/