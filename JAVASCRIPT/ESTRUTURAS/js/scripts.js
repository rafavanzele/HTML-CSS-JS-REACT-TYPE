// 1 - Variáveis
// a - Let (a variável pode ser alterada ao longo do programa, atribuir diversos valores)
//let nome = "Rafael"
//console.log(nome)

//nome = 'Rafael Vanzele'
//console.log(nome)

// b - Const (a variável não será alterada, ela é CONSTANTE, ou seja, só assumirá o primeiro 'valor' que lhe foi atribuido. NA MAIORIA DOS PROJETOS É USADO CONST PORQUE NÃO SE COSTUMA MUDAR MUITO O VALOR DAS VARIÁVEIS)
//const idade = 37
//console.log(idade)

//idade = 38
//console.log(idade)

//console.log(typeof nome)
//console.log(typeof idade)



//FUNÇÕES(são blocos de códigos que podem ser reaproveitados ao longo do programa)

// 1 - Função prompt (abre uma caixinha de "verificação" e o site (programa) so volta a funcionar quando validar essa caixinha. É uma função raramente utilizada)
//const age = prompt('Digite a sua idade')
//console.log(`Sua idade é ${age} anos`)

// 2 - Função alert (igual o prompt)
//alert('Testando')

// 3 - Função math
//console.log(Math.max(1, 3, 56, 43, 21)) //método que encontra o maior valor

//console.log(Math.floor(14,25)) //método arredonda pra baixo

//console.log(Math.ceil(14,25))  //método que arredonda pra cima

// 4 - Função console
//console.log('teste!')

//console.error('erro!')

//console.warn('aviso!')


// IF
//const m = 10

//if(m > 5) {
//    console.log('M é maior que 5!')
//}

//const user = 'João'

//if(user === 'João') {
//    console.log('Bom dia João!')
//}

//ELSE
//const loggedIn = false

//if(loggedIn) {
//    console.log('Está autenticado')
//} else {
//    console.log('Não está autenticado')
//}


//const q = 10
//const w = 15

//if(q > 5 && w > 16) {
//    console.log('Números mais altos')
//} else {
//    console.log('Os números não sao mais altos')
//}


// ELSE IF 
//if(1 > 2) {
//    console.log('Teste 1')
//} else if(3 > 4) {
//    console.log('Teste 2')
//} else if(1 < 5) {
//    console.log('Agora sim!')
//}


//const userName = 'Rafael'
//const userAge = 37

//if(userName === 'Jonas') {
//    console.log('Bem vindo Jonas!')
//} else if(userName === 'Rafael' && userAge === 37) {
//    console.log('Olá Rafael, você tem 37 anos')
//} else {
//    console.log('Nenhuma condição aceita!')
//}


// WHILE
//let p = 1
// while(p < 5) {
//    console.log(`Repetindo ${p}`)
//    p = p + 1 //(pode escrever p++)
// }


// FOR
//for(t = 0; t < 6; t++) {
//    console.log(`Imprimiindo T: ${t}`)
//}


//let r = 5
//for(r; r > 0; r--) {
//    console.log(`Imprimindo R: ${r}`)
//}


// BREAK (forçando a parada de um loop)
//for(let g = 30; g > 15; g--) {
//    console.log(`Imprimindo G: ${g}`)

//    if(g === 23) {
//        console.log(`O G é igual a 23`)
//        break
//    }
//} 



//CONTINUE
//for (let s = 1; s < 10; s++) {
//    if (s % 2 === 0) {
//        console.log('Número par!')
//        continue
//    }
//    console.log(s)
//}