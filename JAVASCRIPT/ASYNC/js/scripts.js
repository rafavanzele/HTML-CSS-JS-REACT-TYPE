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
