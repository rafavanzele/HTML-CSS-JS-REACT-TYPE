import { useState } from "react"

const Data = () => {
    let someData = 10

    // Usar um state (useState) para alterar o valor de um dado. A sintaxe é: "criar um array com o nome da variavel ',' o nome do método que muda a variavel = useState()"
    const [anotherNumber, setAnotherNumber] = useState(15)


  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>

        
        {/* useState */}
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(27)}>Mudar state</button>
        </div>
    </div>
  )
}

export default Data