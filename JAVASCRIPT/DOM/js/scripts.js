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