import { useEffect, useState } from "react"

const HookUseEffect = () => {
    // 3 USEEFFECT SEM DEPENDENCIAS
    useEffect(() => {
        console.log('Estou sendo executado')
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }
  
    return (
    <div>
        <h2>3. UseEffect</h2>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Somar</button>
    </div>
  )
}

export default HookUseEffect