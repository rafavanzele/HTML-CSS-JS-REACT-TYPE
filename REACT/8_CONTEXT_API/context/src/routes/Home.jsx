// 3 ALTERANDO O VALOR DO CONTEXTO
//import { useContext } from "react"

//import { CounterContext } from '../context/CounterContext'

import ChangeCounter from "../components/ChangeCounter"

// 4 REFATORANDO COM HOOK
import { useCounterContext } from '../hooks/useCounterContext'


const Home = () => {
  //const {counter} = useContext(CounterContext)

  // 4 REFATORANDO COM HOOK
  const { counter } = useCounterContext()

  return (
    <div>
      <h1>Home</h1>

      <p>Valor do contador: {counter}</p>

      <ChangeCounter/>
    </div>
  )
}

export default Home