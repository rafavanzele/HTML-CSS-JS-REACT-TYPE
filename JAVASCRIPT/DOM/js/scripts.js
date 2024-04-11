// 1 - MOVENDO-SE PELO DOM
console.log(document.body)
console.log(document.body.childNodes) //movendo pelos child do body
console.log(document.body.childNodes[1]) //movendo pelo 1o childNode do body, neste caso o header
console.log(document.body.childNodes[1].childNodes) //movendo pelos child do header (neste exemplo)
console.log(document.body.childNodes[1].childNodes[1].textContent) //acessando o texto do primeiro filho do header



//  2 - EM GRANDES PROJETOS PODEMOS SELECIONAR ELEMENTOS DIRETAMENTE SEM PRECISAR FAZER O CAMINHO LONGO COMO NO EXEMPLO ACIMA
// 2.a. Selecionando elemento por TAG (não é muito aconselhado usar por ter muitas tags iguais no projeto)
const listItems = document.getElementsByTagName('li') //nesse caso o argumento é em formato de string
console.log(listItems) 

// 2.b. Selecionando elemento por ID (mais utilizado pq partimos do principio que so temos 1 ID por pagina)
const title = document.getElementById('title') //aqui o argumento tbm é uma string
console.log(title)

// 2.b. Selecionando elementos por CLASSE (selecionamos um conjunto de elementos através da classe em comum)
const products = document.getElementsByClassName('product')
console.log(products)

// 2.b. Selecionando elementos por CSS (é a forma mais utilizada)
const productQuery = document.querySelectorAll('.product') //atenção, usado para mais de um elemento, se for uma classe usar o '.'
console.log(productQuery)

const mainContainer = document.querySelector('#main-container') //atenção, usado para 1 elemento, se for um ID usar a '#'
console.log(mainContainer)



// 3 - ALETERANDO O HTML ATRAVÉS DO DOM (Podemos adicionar, excluir e até clonar elementos do html através do DOM. Exemplos de métodos pra fazer essas alterações: insertBefore(insere um elemento antes do outro), appendChild(insere um elemento dentro do outro), replaceChild(troca um elemento por outro))
// 3.a. INSERT BEFORE (neste exemplo vou inserir um paragrafo antes do h1, dentro do header )
const p = document.createElement('p') //criando meu elemento p

const header = title.parentElement // acessando o elemento pai de onde vou inserir meu p

header.insertBefore(p, title) // aqui inseri o p antes do title que esta dentro do header

// 3.b APPENDCHILD (esse método adiciona um elemento dentro de outro, ou seja, um filho dentro de um pai. Nesse metodo o child vai ficar por ultimo no elemento pai. Neste exemplo vou add um novo 'li' dentro do meu nav)
const navLinks = document.querySelector('nav ul') //aqui acessei o meu nav

const li = document.createElement('li') //depois criei meu novo 'li'

navLinks.appendChild(li) //aqui add o meu novo 'li' dentro do elemento pai (nav)

// 3.c REPLACECHILD (substituindo um elemento por outro. Neste exemplo, vou substituir meu H1 do header por um H2)
const h2 = document.createElement('h2') //criei meu novo h2

h2.textContent = "Meu novo título" //inseri conteúdo no meu novo H2

header.replaceChild(h2, title) //substitui meu h1 (title), pelo meu novo h2. Atenção a ordem de parametros deve ser (meu novo elemento, elemento a ser substituido)

// 3.d CREATETEXTNODE (método muito parecido com o '.textContent', ele add nós de texto)
const myText = document.createTextNode('Agora vou adicionar mais um título') //criei um novo titulo

const h3 = document.createElement('h3') //criei um novo H3

h3.appendChild(myText) //inseri o texto que criei nesse novo H3 que criei

mainContainer.appendChild(h3) //adicionei ao html meu novo H3 com meu novo titulo dentro do meu container. Note que ele sera o ultimo elemento do elemento pai (main-container)



// 4 - TRABALHANDO ATRIBUTOS (Podemos ler (getAttribute), e alterar (setAttribute) os valores dos atributos)
//Neste exemplo vou alterar o primeiro link da barra de navegação:
const firstLink = navLinks.querySelector('a') //aqui estou selecionando o primeiro link do meu navLinks
console.log(firstLink)

firstLink.setAttribute('href', 'https://google.com') //aqui eu mudei o href do meu link. De um '#', virou um link do google
firstLink.setAttribute('target', '_blank') //inseri outro atributo pro link abrir numa nova guia



// 5 - ALTURA E LARGURA DOS ELEMENTOS (offsetHeight, offsetWidth)
const footer  = document.querySelector('footer')

console.log(footer.offsetWidth) //imprimo o valor da largura do elemento (nesse caso meu footer)
console.log(footer.offsetHeight) //idem ao anterior, porém na altura

console.log(footer.clientWidth) //idem anteriores mas descontando o valor das bordas
console.log(footer.clientHeight)



// 6 - POSIÇÃO DO ELEMENTO NA TELA (neste exemplo quero "descobrir", como está posicionado meu produto1)
const product1 = products[0] //aqui declarei que quero saber a posição do meu produto1 no array products que ja tinha declarado la em cima

console.log(product1.getBoundingClientRect())



// 7 - ESTILOS EM JS (assim como css podemos mexer no estilo dos elementos. Cuidado com regras que possuem hifen (background-color, por ex), em JS devemos utilizar o camelCase)
mainContainer.style.color = 'blue'
mainContainer.style.backgroundColor = '#dcdcdc'



// 8 - ALTERANDO ESTILOS DE VÁRIOS ELEMENTOS (usamos o FOR OF, ou seja, um loop para alterar estilos de varios elementos (array))
//Neste exemplo vou alterar o estilo dos meus 'li'
for(const li of listItems) {
    li.style.backgroundColor = '#ffa500'
}


