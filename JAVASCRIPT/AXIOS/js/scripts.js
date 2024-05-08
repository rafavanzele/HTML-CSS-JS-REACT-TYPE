// 1 - INSTALAÇÃO
console.log(axios)



// 2 - PRIMEIRO REQUEST (REQUISIÇÃO é fazer uma solicitação/pedido a um servidor externo). Neste exemplo vou pegar dados de uma api de terceiro (um site externo)
const getData = async() => {

    try {
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response)

        return response.data
    
    } catch (error) {
        console.log(error)
    }


}

getData()



// 3 - INSERINDO DADOS DE UMA API DE TERCEIRO (aqui faremos uma requisação para uma API, os dados retornaram em formato de JSON, transferimos esses dados pra um array/objeto, e imprimimos esses dados na tela do usuário através do DOM)
const container = document.querySelector('#user-container')

const printData = async() => {
    const data = await getData()

    console.log(data)

    data.forEach((user) => {
        const div = document.createElement('div')

        const nameElement = document.createElement('h2')

        nameElement.textContent = user.name

        div.appendChild(nameElement)

        // Exibindo também os emails dos usuários da mesma API
        const emailElement = document.createElement('p')

        emailElement.textContent = user.email

        div.appendChild(emailElement)

        
        container.appendChild(div)
    })
}

printData()



// 4 - REQUISIÇÃO DE POST (em axios quando queremos enviar dados para o servidor usamos o POST, por exemplo para salvar dados no banco. É necessario configurar a propriedade body com os dados a serem enviados)
const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title')
const bodyInput = document.querySelector('#body')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // vou indicar para onde os dados devem ser enviados (atenção, aqui vou ter dois parâmetros):
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: titleInput.value,
        body: bodyInput.value, 
        userId: 1
    })
})