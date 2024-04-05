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



