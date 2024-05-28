// TEMPLATE EXPRESSIONS é um recurso que permite executar js em jsx. Podemos tbm incoporar variáveis no jsx

const TemplateExpressions = () => {
    const name = 'Rafael'

    const data = {
        age: 37,
        job: 'programador'
    }

  return (
    <div>
        <p>A soma é {2+2}</p>

        <h2>Bem vindo {name}</h2>

        <h2>Você tem {data.age} anos e trabalha como {data.job}.</h2>
    </div>
  )
}

export default TemplateExpressions