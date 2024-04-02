// 1 - CRIANDO UMA FUNÇÃO
function minhaFuncao() {
    console.log('Testando primeira função')
}

minhaFuncao()

//1.a. Criando função numa variável:
const minhaFuncaoEmVariavel = function () {
    console.log('Função em variável')
}

minhaFuncaoEmVariavel()

// 1.b. Criando função com argumento/parâmetro
function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro('Imprimindo alguma coisa')
funcaoComParametro('Mais um texto impresso')



// 2 - RETORNANDO VALORES / return
const a = 10
const b = 30
const c = 50
const d = 70

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b)

console.log(resultado)

console.log(soma(a, d))



// 3 - ESCOPO DA FUNÇÃO (aqui é pra avisar que basicamente um código de fora/global não interfere no código de uma função)
let y = 10

function testandoEscopo () {
    let y = 35
    console.log(`Y dentro da função é: ${y}`)
}

testandoEscopo()

console.log(`Y fora da função é: ${y}`)



// 4 - ARROW FUNCTION (é uma function mas com sintaxe mais resumida. Um recurso mais atual. Por ser anonima, a arrow precisa ser declarada dentro de uma variável)
// 4.a
const testeArrow = () => {
    console.log('Esta é uma arrow function')
}

testeArrow()

//4.b
const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log('Par')
        return
    }

    console.log('Ímpar')
}

parOuImpar(13)
parOuImpar(24)



// 5 - ARROW FUNCTION MAIS 'RESUMIDA' (recurso usado para poupar codigo, quando você consegue resumir a função em uma única linha)
const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQuadrada(4))

//o exemplo acima ficaria assim:
const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(5))


// 6 VALOR DEFAUT (é quando o argumento tem valpr prévio declarado. Se for passado um novo valor, o default é substituido)
const customGreeting = (name, greet = 'Olá') => {
    return `${greet}, ${name}`
}

console.log(customGreeting('Rafael'))
console.log(customGreeting('José', 'Bom dia'))


const repeatText = (text, repeat = 3) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text)
    }
}

repeatText('Repetindo o texto')
repeatText('Agora repetindo o texto 6 vezes', 6)