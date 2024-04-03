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


