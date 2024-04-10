// 1 - FUNÇÃO 'SET TIMEOUT' (estabelecemos uma ação para ser executada após um certo tempo. Ou seja, o código continua rodando e depois temos a execução da função)
console.log('Ainda não executou')

setTimeout(function() { //requisição com dois argumentos: uma function anonima ',' e quanto tempo pra executar a req async
    console.log('Requisição Assíncrona')
}, 2000) //aqui a requisição sera executada após 2000 milisegundos

console.log('Ainda não executou 2')



// 2 - FUNÇÃO 'SET INTERVAL' (semelhante ao setTimeout, deve ser usado com cautela pois funciona como um loop infinito com execução de tempo programada)
//console.log('Ainda não executou 3')

//setInterval(function() {
//    console.log('Intervalo Assíncrona')
//}, 3000)

//console.log('Ainda não executou 4')



// 3 - PROMISES (é uma promessa de um valor que pode chegar em um ponto futuro. O Promise tem alguns métodos que complementam a sua utilização)
const promessa = Promise.resolve(5 + 10)

console.log('Algum código')

promessa.then(value => {
    console.log(`A soma é: ${value}`)
})

console.log('Outro código')

//resumo da aula 3: 'Promise' é o objeto, 'resolve' é o método que vai resolver o argumto entre (), 'then' é o método que vai levar a promessa adiante



// 4 - TRATANDO ERRO NAS PROMISES (uma promise pode conter ou levar a um erro, entao usamos o 'catch' para tratar esse erro)
Promise.resolve(4 * 'asd')

.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error('Valores inválidos')
    }
})

.catch((error) => console.log(`Um erro ocorreu ${error}`))



// 5 - ASYNC FUNCTION (muito parecido com a sintaxe do arrow function, async function retornam promises)
async function somarComDelay(a, b) {
    return a + b
}

//como essa async function me retorna uma promise, posso usar métodos de promises, como o '.then'
somarComDelay(10, 15).then((value) => {
    console.log(`O valor da soma é: ${value}`)
})

console.log('Mais um teste async')



// 6 - ASYNC AWAIT / INSTRUÇÃO AWAIT (quando se cria uma async function, é quase o mesmo que criar uma promise. Usa-se o async await, para aguardar o resultado de uma async function mas sem lidar diretamente com promise)
function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolveu a Promise')
        }, 4000)
    })
}

async function chamadaAsync() {
    console.log('Chamando a Promise, e esperando o resultado')
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync()



// 7 - GENERATORS (pouco utlizado, são muito parecidos com promises. As ações podem ser pausadas e retomadas depois.)
function* generator() { //toda função com '*' é um generator
 yield 1
 yield 2
 yield 3
 yield 4
}

const gen = generator()

//obs: a cada execução o generator vai me retornar um valor (yield) diferente
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)