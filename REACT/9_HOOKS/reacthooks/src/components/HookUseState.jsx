import { useState } from "react"

const HookUseState = () => {
    // 1 USESTATE
    const [name, setName] = useState('Rafael')

    let userName = 'Pedro'

    const changeName = () => {
        userName = 'Pedro da Silva'

        setName('Rafael Vanzele')
    }

  return (
    <div>
        {/* 1 USESTATE (obs: para leitura de dados esse hook nao tem tanta importancia. Mas para alterar dados sim)*/}
        <h2>UseState</h2>
        <p>useState: {name}</p>
        <p>variável: {userName}</p>

        <button onClick={changeName}>Mudar nome</button>
    </div>
  )
}

export default HookUseState