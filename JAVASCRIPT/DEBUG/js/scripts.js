// 1 - USE STRICT (é uma forma de programar que deixa o JS mais rígido e rigoroso. Para usa-lo é preciso declara-lo entre aspas no topo do arquivo ou de funçoes)
//por exemplo, em JS voce pode declarar uma variavel diretamente sem especificar o tipo de variável:
//opa = 'teste'

// com o use strict isso já não é possivel pq o JS fica mais rigoroso
'use strict'

//opa2 = 'teste2'
const opa2 = 'teste2'



// 2 - DEBUGGER
let c = 1
let d = 2

if(c == 1) {
    c = d + 2
}

//debugger

for (let i = 0; i < d; i++) {
    c = c + 2
}

console.log('executou o loop')
//debugger



// 3 - TRATAMENTO DE DADOS POR FUNÇÃO (nunca podemos confiar no dado fornecido pelo usuário. Precisamos criar validações e  tratamento para os mesmos)
//nesse exemplo vamos criar uma função para validar que o usuario fez um input de numero:
function checkNumber(n) {
    const result = Number(n)

    if(Number.isNaN(result)) { // se o Number.isNan for verdadeiro
        console.log('Dado inválido')
        return
    }

    console.log('Dado válido')
    return result
}

checkNumber(5)
checkNumber('10') // aqui a function converteu a string em numero
checkNumber({})



// 4 - EXCEPTIONS (são erros que geramos no programa. Este recurso interrompe a execução do programa. Usamos a expressão 'throw new Error(mensagem de erro)')
let x = 10

//if (x != 11) {
//    throw new Error('O valor de x não pode ser diferente de 11!')
//}



// 5 - TRY CATCH (muito parecido com o IF e ELSEIF. Aqui tentamos executar um bloco em TRY e se der algum erro ele cai no bloco CATCH. Util para um debug. Obs ele nao para a execução do programa)
try {
    const soma = x + y
} catch (error) {
    console.log(`Erro no programa ${error}`)
}
