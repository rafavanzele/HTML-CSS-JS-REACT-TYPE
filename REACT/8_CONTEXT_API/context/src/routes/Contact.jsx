// 3 ALTERANDO O VALOR DO CONTEXTO
import { useContext } from "react"

import { CounterContext } from '../context/CounterContext'


// 4 REFATORANDO COM HOOK
import { useCounterContext } from '../hooks/useCounterContext'


// 5 CRIANDO CONTEXTO MAIS COMPLEXO
import { useTitleColorContext } from "../hooks/useTitleColorContext"



const Contact = () => {
  const { counter } = useCounterContext()

  // 5 CRIANDO CONTEXTO MAIS COMPLEXO
  const { color } = useTitleColorContext()
  
  return (
    <div>
        <h1 style={{color: color}}>Página de contato</h1>

        <p>Valor do counter: {counter}</p>
    </div>
  )
}

export default Contact