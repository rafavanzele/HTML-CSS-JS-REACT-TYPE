import { useState } from "react"

const HookUseState = () => {
    // 1 USESTATE
    const [name, setName] = useState('Rafael')

    let userName = 'Pedro'

    const changeName = () => {
        userName = 'Pedro da Silva'

        setName('Rafael Vanzele')
    }


    // 2 USESTATE E INPUT
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }

  return (
    <div>
        {/* 1 USESTATE (obs: para leitura de dados esse hook nao tem tanta importancia. Mas para alterar dados sim)*/}
        <h2>1. UseState</h2>
        <p>useState: {name}</p>
        <p>variável: {userName}</p>
        <button onClick={changeName}>Mudar nome</button>


        {/* 2 USESTATE E INPUT */}
        <h3>1.1 UseState e Input</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />

            <input type="submit" value={'Enviar'} />
        </form>
        <p>Você tem {age} anos!</p>
        <hr />
    </div>
  )
}

export default HookUseState