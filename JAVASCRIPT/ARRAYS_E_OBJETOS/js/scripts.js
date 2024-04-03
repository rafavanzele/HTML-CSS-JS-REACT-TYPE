// 1 - ARRAYS (são listas que podem conter todo tipo de dado / o JS considera um array como objeto)
// 1. a.
const lista = [1, 2, 3, 4, 5, 6]
console.log(lista)
console.log(typeof lista)

const itens = ['Rafael', 37, [], true]
console.log(itens)
console.log(typeof itens)

// 1. b. (acessando o indice/item individuais dentro de um array)
const arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arr[4]) 


// 2 - PROPRIEDADES (propriedades são informações que se pode obter de um determinado objeto. A sintaxe "xxx.propriedade")
const numbers = [1, 12, 23, 34, 45, 56, 67]
console.log(numbers.length) //'length' é uma propriedade usada para saber o 'tamanho' de um objeto

const myName = 'Rafael'
console.log(myName.length)


// 3 - MÉTODOS (objetos são formados por métodos + propriedades; e métodos são como funções. São invocados por (xxx.método))
const otherNumbers = [3, 5, 7]

const allNumbers = numbers.concat(otherNumbers) //metodo de concatenar (.concat) para juntar dois arrays em um só (numbers+otherNumbers)
console.log(allNumbers)

const text = 'um texto aleatório'
console.log(text.toLocaleUpperCase())  //método pra deixar uma string em uppercase (caixa alta)
console.log(text.indexOf('x')) //método para identificar o indice de um dado dentro de uma string
console.log(typeof text.toUpperCase)


// 5 - OBJETOS (Objects literals) é declarado em uma variável, possui apenas propriedades e métodos e fica em um bloco de chaves
const person = {
    name: 'Rafael',
    age: 37,
    genre: 'male'
}

console.log(person) //imprime todo o conteudo do objeto
console.log(person.name) //imprime uma propriedade específica dentro do objeto
console.log(person.genre.length) //imprime o 'tamanho' de determinada propriedade do objeto
console.log(typeof person) //imprime o tipo de dado que é


// 6 - CRIANDO E DELETANDO PROPRIEDADES
// 6.a. Criando propriedade:
const car = {
    brand: 'VW',
    model: 'Fox',
    color: 'preto',
    km: 10000
}

console.log(car)

car.doors = 2 //para criar propriedades num objeto, basta usar o 'nomedoobjeto.proriedade'
console.log(car)

// 6.b. Deletando propriedade:
const tv = {
    color: 'preto',
    size: 60,
    smart: true
}

console.log(tv)

delete tv.smart //para deletar  uma propriedade basta usar o 'delete' + nome da propriedade

console.log(tv)



// 7 - MÉTODO KEYS (PARA OBJETOS) podemos verificar as propriedades de um objeto usando o método KEYS
// nesse exemplo vou testar no objeto car (que criei logo acima)
console.log(Object.keys(car))

// nesse exemplo vou testar no objeto tv (que criei logo acima)
console.log(Object.keys(tv))

// nesse exemplo vou testar o método ENTRIES para verificar as chaves e os valores do objeto
console.log(Object.entries(car))