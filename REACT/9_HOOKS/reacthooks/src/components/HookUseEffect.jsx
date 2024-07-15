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


    // 3.1 USEEFFECT E ARRAY DE DEPENDENCIAS VAZIO
    useEffect(() => {
        console.log('Serei executado apenas uma vez')
    }, [])
  

    // 3.2 USEEFFECT E ARRAY DE DEPENDENCIAS COM VALOR
    const [anotherNumber, setAnotherNumber] = useState(0)
    useEffect(() => {
        if(anotherNumber > 0) {
            console.log('Sou executado apenas quando muda o anothernumber')
        }

    }, [anotherNumber])

{/*
    // 4 CLEANUP DO USEEFFECT
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Olá, mundo!')
            setAnotherNumber(anotherNumber + 1)
        }, 3000)

        return() => clearTimeout(timer)
    }, [anotherNumber])

*/}    
    
    return (
    <div>
        <h2>3. UseEffect</h2>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Somar</button>

        {/* 3.2 USEEFFECT E ARRAY DE DEPENDENCIAS COM VALOR */}
        <h3>3.2 UseEffect e array de dependencias com valor</h3>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar o another</button>

        <hr />
    </div>
  )
}

export default HookUseEffect