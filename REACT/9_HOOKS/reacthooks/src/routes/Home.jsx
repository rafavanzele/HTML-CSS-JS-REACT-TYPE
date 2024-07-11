import HookUseState from '../components/HookUseState'

const Home = () => {
  
  return (
    <div>
      <h1>Home</h1>
      {/* 1 USESTATE (obs: para leitura de dados esse hook nao tem tanta importancia. Mas para alterar dados sim) */}
      <HookUseState />
    </div>
  )
}

export default Home