import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'

const Home = () => {
  
  return (
    <div>
      <h1>Home</h1>
      {/* 1 USESTATE (obs: para leitura de dados esse hook nao tem tanta importancia. Mas para alterar dados sim) */}
      <HookUseState />

      {/* 2 USEREDUCER */}
      <HookUseReducer/>

      {/* 3 USEEFFECT */}
      <HookUseEffect/>
    </div>
  )
}

export default Home