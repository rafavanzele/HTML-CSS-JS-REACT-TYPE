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



// 19 - MÉTODO JOIN (no prcesso reverso, esse método transforma uma lista/array em string)
const fraseDenovo = arrayDaFrase.join(' ')
console.log(fraseDenovo)

// exemplo de uma lista de compras:
const itensParaComprar = ['arroz', 'feijão', 'macarrão', 'farinha']

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(', ')}.`
console.log(fraseDeCompra)



// 20 - MÉTODO REPEAT 
const repetir = 'testando '
console.log(repetir.repeat(4))



// 21 - ARRAY - REST OPERATOR/REST PARAMETERS (caracterizado pelo simbolo ...(reticências), é muito utilizado para uma determinada função receber indefinidos argumentos. Assim não precisamos declarar exatamente o que receber, deixando a funçao mais ampla)
const somaInfinita = (...args) => { //aqui usei as ... como argumento, pra durante o uso do programa add qtos 'i' eu quiser
    let total = 0

    for(i = 0; i < args.length; i++) {
        total += args[i]
    }

    return total
}

console.log(somaInfinita(1, 10, 1000))
console.log(somaInfinita(2, 34, 456, 567, 744, 345, 987))



// 22 - ARRAYS: FOR OF (mesma função do 'for' mas com sintaxe simplificada)
const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args) { //traduzinho: para cada 'numero' do 'argumento'
        total += num
    }

    return total
}

console.log(somaInfinita2(3, 4, 6, 8))



// 23 - DESTRUCTURING EM OBJETOS (nos permite desestruturar algum dado. No caso do objeto, é possível criar variáveis a partir de suas propriedades)
// 23.a
const dadosPessoais = {
    firstName: 'Rafael',
    lastName: 'Gomes',
    age: 37,
}

//tradicionalmente desestrutuaria assim:
//const firstName = dadosPessoais.firstName
//const lastName = dadosPessoais.lastName
//const age = dadosPessoais.age

//usando método moderno:
const {firstName, lastName, age} = dadosPessoais
console.log(firstName, lastName, age)
console.log(typeof dadosPessoais)

// 23.b renomeando propriedades (supondo que exista duas variáveis com nome repetido)
const {firstName: primeiroNome} = dadosPessoais
console.log(primeiroNome)



// 24 - DESTRUCTURING EM ARRAYS (mesma lógica de objetos mas como não existe nome de propriedade, é o índice que vai contar pq array é uma lista)
const myList = ['Casa', 'Apartamento', 'Kitchnet']

const [imovelA, imovelB, imovelC] = myList
console.log(imovelA, imovelB, imovelC)



// 25 - JSON (JavaScript Object Notation, é um dado de texto. Extremamente importante, funciona como ponte entre back e frontend. Formatação super rigorosa, por exemplo: usa apenas aspas duplas e não aceita comentário. Geralmente não criamos o dado na unha, nós ja recebemos pronto)
const myJson = '{"name": "Rafael", "age": 37, "hobbies": ["ler", "cinema", "malhar"]}'



// 26 - CONVERTANDO JSON PARA OBJETO E CONVERTENDO OBJETO PARA JSON (o JSON puro não tem utilidade pra gente. Ele precisa ser convertido em objeto, por exemplo)
// 26.a convertendo o JSON acima em objeto
const myObject = JSON.parse(myJson)
console.log(myObject)

//add um novo dado ao objeto
myObject.adress = 'Santo André'
console.log(myObject)

//o objeto foi manipulado e quero converter em JSON novamente
const myNewJson = JSON.stringify(myObject)
console.log(myNewJson)



// 27 - SPREAD OPERATOR (recurso utilizado em arrays e objetos. Serve para inserir novos valores a um objeto ou array, e até mesmo para unir dois arrays)
const ar1 = [1, 2, 3]
const ar2 = ['a', 'b', 'c']

const ar3 = [...ar1, ...ar2]
console.log(ar3)

const ar4 = [0, ...ar3, 'd']
console.log(ar4)

// Imagine o seguinte exemplo: um mesmo item com várias informações espalhadas pelo código e vc quer juntá-las todas em um único array/objeto:
const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 10000, price: 35000}

const myCar = {...carName, ...carBrand, ...otherInfos}
console.log(myCar)
