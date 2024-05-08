// GLOBAL INSTANCE são configurações globais que podemos fazer no axios global sem precisar fazer alterações em cada requisição. Não podemos esquecer de 'chamar' o global.js no nosso index. Nesse exemplo vamos listar as configurações globais do axios que queremos alterar
axios.default.headers.common['Accept'] = 'application/json'
axios.default.headers.common['Authorization'] = 'MEUTOKENDOAPP'
