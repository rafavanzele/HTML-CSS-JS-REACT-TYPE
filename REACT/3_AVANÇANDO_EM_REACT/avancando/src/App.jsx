import './App.css'
// IMPORTANDO IMG DO ASSETS
import chuva2 from './assets/chuva2.jpg'
// USESTATE
import Data from './components/Data'
// RENDERIZAÇÃO DE LISTA
import ListRender from './components/ListRender'
// CONDITIONAL RENDER
import ConditionalRender from './components/ConditionalRender'
// PROPS
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
// DESESTRUTURANDO PROPS

function App() {
  
  return (
    <div style={{paddingBottom: '500px'}}>
      <h1>Avançando em React</h1>
      {/* IMAGEM EM PUBLIC */}
      <img src="/chuva.jpg" alt="imagem de chuva" />

      {/* IMAGEM EM ASSETS */}
      <img src={chuva2} alt="outra imagem de chuva" />

      {/* USESTATE */}
      <Data/>

      {/* RENDERIZAÇÃO DE LISTA */}
      <ListRender/>

      {/* CONDITIONAL RENDER */}
      <ConditionalRender/>

      {/* PROPS */}
      <ShowUserName name = 'Rafael'/>

      {/* DESESTRUTURANDO PROPS */}
      <CarDetails brand='VW' km={100000} color='preto'/>

      {/* REAPROVEITANDO COMPONENTES (nesse exemplo o CarDetails) */}
      <CarDetails brand='Fiat' color='cinza' km={2500}/>
      <CarDetails color='Vermelho' brand='GM' km={50000}/>
    </div>
  )
}

export default App
