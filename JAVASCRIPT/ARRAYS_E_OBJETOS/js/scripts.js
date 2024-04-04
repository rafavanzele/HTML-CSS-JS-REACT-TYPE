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



// 8 - MUTAÇÃO (alteração de um objeto dentro de outro objeto/ não é muito recomendado, basta conferir o pq no exemplo abaixo)
const a = {
    name: 'Rafael',
}

const b = a

console.log(a)
console.log(b)

a.age = 37
console.log(a)
console.log(b)



// 9 - LOOP EM ARRAYS
const users = ['Rafael', 'Pedro', 'João', 'José']

for (i = 0; i < users.length; i++) {
    console.log(`Listando users com um loop: ${users[i]}`)
}



// 10 - MÉTODO PUSH E POP DE ARRAY (com push podemos add um elemento ao fim do array, e o pop podemos remover o ultimo elemento do array)
//10.a
const array = ['a', 'b', 'c']

array.push('d')
console.log(array)

//10.b
array.pop()
console.log(array)

//10.b.1 imprimindo o item removido
const itemRemovido = array.pop()
console.log(itemRemovido)
console.log(array)

//10.b.2 add varios elementos ao mesmo tempo no array
array.push('x', 'y', 'z')
console.log(array)



// 11 - SHIFT E UNSHIFT (REMOVE E ADICIONA, RESPECTIVAMENTE, ELEMENTOS AO 'INICIO' DO ARRAY)
const array2 = ['e', 'f', 'g', 'h']
const letter = array2.shift() //resgatando (e talvez imprimindo) o elemento removido

console.log(letter)
console.log(array2)

array2.unshift('p', 'q', 'r')
console.log(array2)



// 12 - INDEXOF E LASTINDEXOF (semelhante ao que foi mostrado antes, o indexOf mostra o indice de um determinado elemento de um array. o lastIndexOf faz o mesmo processo mas lendo o array do fim pro começo; é utilizado quando há elementos 'repetidos')
const myElements = ['laranja', 'uva', 'morango', 'abacaxi', 'limão', 'uva']

console.log(myElements.indexOf('laranja'))
console.log(myElements.indexOf('uva'))

console.log(myElements.lastIndexOf('uva'))
//obs.: quando o elemento não existe, em ambos os casos o índice aparece como -1. Veja exemplo:
console.log(myElements.indexOf('açaí'))



// 13 - MÉTODO DE ARRAY SLICE (muito util quando se quer extrair um array menor de um array maior, ou seja, extrair um intervalo de elementos de dentro de um array)
const testeSlice = ['arroz', 'feijão', 'batata', 'omelete', 'salada', 'carne']

const subTesteSlice = testeSlice.slice(1, 3 + 1) //aqui se coloca o +1 pro subarray vir completo, ou seja, do 1 ao 3

console.log(subTesteSlice)
console.log(testeSlice)
// se colocar um intervalos de dados que não existe, o retorno dele no console.log será []

const subTesteSlice2 = testeSlice.slice(3) //neste exemplo, o subarray 'extraído' será do indice 3 até o final
console.log(subTesteSlice2)



// 14 - MÉTODO FOREACH (é igual um FOR e WHILE, porém é um método)
const numbs = [1, 2, 3, 4]

numbs.forEach((numb) => {
    console.log(`O número é ${numb}`)
})


const movies = [
    {title: 'A Bruxa', category: 'terror'},
    {title: 'Anjos Caídos', category: 'romance'},
    {title: 'Saneamento Básico', category: 'comédia'},
]

movies.forEach((movie) => {
    console.log(`Exibindo o filme ${movie.title} da categoria ${movie.category}`)
})



// 15 - MÉTODOS INCLUDES (utilizado para saber se existe um determinado elemento dentro do array)
//15.a
const colors = ['azul', 'amarelo', 'roxo', 'cinza', 'vermelho']

console.log(colors.includes('amarelo')) //ele vai retornar um dado booleano

console.log(colors.includes('laranja'))

//15.b
const food = ['hamburger', 'batata-frita', 'salada', 'peixe', 'macarrão']

if(food.includes('macarrão')) {
    console.log('Há macarrão no cardápio hoje')
}



// 16 - MÉTODO REVERSE (usado para inverter a ordem dos elementos de um array. MUITO CUIDADO AO USAR ELE)
const testeReverse = [1, 2, 3, 4, 5]

testeReverse.reverse()
console.log(testeReverse)



// 17 - MÉTODOS EM STRINGS: TRIM (ele elimina tudo que não é texto em uma string, por exemplo caracteres especias e espaçamentos)
const trimTest = ' testando     '

console.log(trimTest)
console.log(trimTest.trim())

console.log(trimTest.length)
console.log(trimTest.trim().length)



// 18 - MÉTODO SPLIT (esse método divide uma string em um array/lista)
const frase = 'Quem mexeu no meu queijo'

const arrayDaFrase =  frase.split(' ') //aqui meu argumento é que a cada espaço haja um split
console.log(arrayDaFrase)
