// 3 ALTERANDO O VALOR DO CONTEXTO
//import { useContext } from "react"

//import { CounterContext } from '../context/CounterContext'

import ChangeCounter from "../components/ChangeCounter"

// 4 REFATORANDO COM HOOK
import { useCounterContext } from '../hooks/useCounterContext'

// 5 CRIANDO CONTEXTO MAIS COMPLEXO
import { useTitleColorContext } from "../hooks/useTitleColorContext"


const Home = () => {
  //const {counter} = useContext(CounterContext)

  // 4 REFATORANDO COM HOOK
  const { counter } = useCounterContext()

  // 5 CRIANDO CONTEXTO MAIS COMPLEXO
  const { color, dispatch } = useTitleColorContext()

  // 6 ALTERANDO  O CONTEXTO MAIS COMPLEXO
  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>

      <p>Valor do contador: {counter}</p>

      <ChangeCounter/>

      {/* 6 ALTERANDO O CONTEXTO MAIS COMPLEXO */}
      <button onClick={() => setTitleColor('RED')}>Vermelho</button>
      <button onClick={() => setTitleColor('BLUE')}>Azul</button>
    </div>
  )
}

export default Home