// 1 - MÉTEDO (métodos podem ser criados aos objetos. São como propriedades mas contém uma função)
const animal = {
    nome: 'Bob',
    latir: function() {
        console.log('au au')
    }
}

console.log(animal.nome)
animal.latir() //aqui estou invocando uma função/método (latir) de dentro de um objeto (animal)



// 2 - MAIS SOBRE MÉTODOS (THIS) exemplo este (this) objeto, vai modificar a propriedade x
const pessoa = {
    name: 'Rafael',

    getName: function() {
        return this.name
    },

    setName: function(novoNome) {
        this.name = novoNome
    }
}

console.log(pessoa.name)
//ou:
console.log(pessoa.getName())


pessoa.setName('José')
console.log(pessoa.getName())



// 3 - PROTOTYPE (basicamente são propriedades e métodos que os objetos pais herdam aos filhos. Isso acontece com TODO tipo de dado, seja number, string, boolean etc. Não é tão utilizado hoje em dia)
const text = 'asd'
console.log(Object.getPrototypeOf(text))

const bool = false
console.log(Object.getPrototypeOf(bool))



// 4 - CLASSES BÁSICAS (prototypes são originados de uma CLASSE que são os moldes dos objetos; nela definimos métodos e propriedades. JS já tem suas classes mas podemos criar as nossas)
// Neste exemplo o objeto servirá como MOLDE para nossa CLASSE. Vou criara a classe CACHORRO, e começa null pq vou inserir varios cachorros de diferentes raças
const cachorro = { 
    raca: null,
    patas: 4
}

//Agora vou criar vários objetos com base nessa classe acima
const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = 'Pastor Alemão'

console.log(pastorAlemao)

//Vou criar mais um objeto usando a CLASSE cachorro como base pra isso
const husky = Object.create(cachorro)
husky.raca = 'Husky Siberiano'

console.log(husky)
console.log(husky.patas)



// 5 - FUNÇÃO COMO CLASSE / FUNÇÃO CONSTRUTORA (é o jeito mais moderno de usar CLASSES)
function criarCachorro (nome, raca) {
    
    const cachorro = Object.create({}) //criando objt vazio dentro da função

    cachorro.nome = nome //criando propriedades com base no argumento da função
    cachorro.raca = raca //criando propriedades com base no argumento da função

    return cachorro
}

//crio novos objetos usando a função acima como classe
const bandit = criarCachorro('Bandit', 'Akita')
console.log(bandit)

const apolo = criarCachorro('Apolo', 'Vira-lata')
console.log(apolo)



// 6 - FUNÇÃO COMO CLASSE PARTE 2 (esse modelo é o mais atual. Nesse caso iniciamos a função com letra maiuscula assim o JS ja vai percebe-la como CLASSE)
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const labrador = new Cachorro('Luke', 'Labrador')
console.log(labrador)

const buldog = new Cachorro('Nalu', 'Buldog')
console.log(buldog)



// 7 - MÉTODOS NA FUNÇÃO CONSTRUTORA (inserindo um método na função anterior Cachorro)
Cachorro.prototype.uivar = function() {
    console.log('Auuuu!')
}

buldog.uivar()



// 7 - CLASSES ES6 (é a forma mais atual de se programar orientação a objetos em JS)
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const luna = new CachorroClasse('Luna', 'Pitbull')
console.log(luna)



// 8 - MAIS SOBRE CLASSES
class Filme {
    constructor (titulo, genero, pais) {
        this.titulo = titulo
        this.genero = genero
        this.pais = pais
    }

    //inserindo metodo
    descreverFilme() {
        console.log(`O filme ${this.titulo} é de ${this.genero} e original do(a) ${this.pais}`)
    }
    
}

const aBruxa = new Filme('A Bruxa', 'terror', 'EUA')
console.log(aBruxa)
//ou
aBruxa.descreverFilme()



// 9 - SYMBOL (recurso usado para criar uma propriedade imutável, como se fosse uma const. Usado quando um dado se repetira em todos os objetos da classe)
class Aviao {
    constructor (marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

//add uma propriedade fixa:
const asas = Symbol()
Aviao.prototype[asas] = 2

const boing = new Aviao('Boing', 10)

console.log(boing)
//ou posso imprimir assim:
console.log(boing[asas])



// 10 - GETTERS E SETTERS (GET é um método usado para conseguir/exibir o valor de uma propriedade. SET é um método utilizado para alterar o valor de uma propriedade)
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Você está lendo ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(', ')
        this.tags = tagsArray
    }
}

const myPost = new Post('Algum post', 'É um post sobre programação')
console.log(myPost)
console.log(myPost.exibirTitulo)

myPost.adicionarTags = 'programação, javascript, js'
console.log(myPost) 



// 11 - HERANÇA (semelhante ao prototype, um classe pode herdar propriedades de outra por meio de herança. Utilizamos a palavra chave EXTENDS para add a classe que vai trazer as propriedadese SUPER para enviar os valores para a classe pai)
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}


class Lobo extends Mamifero { //estoou pegando 'patas' de 'mamiferos'
    constructor(patas, nome) {
        super(patas, patas) //estou herdando da classe pai e enviando o patas de volta pra alterar o valor de patas da classe pai 'mamifero'
        this.nome = nome
    }
}

const fred = new Lobo(4, 'Fred')
console.log(fred)



// 12 - INSTANCEOF (assim como o typeof varifica o tipo, o instanceof verifica se um objeto é pai de outro. Só pode ser verificado entre  objeto => classe, e nunca classe vs classe)
//testando nos objetos ja criado anteriormente:
console.log(fred instanceof Lobo) // o fred é uma instanciade/herança de Lobo? true
console.log(Lobo instanceof Mamifero) // a classe lobo é uma herança de mamifero? false (pq nao posso comparar duas classes)
console.log(new Lobo(4, 'Fred') instanceof Mamifero) // o objeto 'new Lobo' é herdeiro de Mamifero? true (pq é um objto vs classe)