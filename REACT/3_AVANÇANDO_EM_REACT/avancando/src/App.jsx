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
// DESESTRUTURANDO PROPS
import CarDetails from './components/CarDetails'
// RENDERIZAÇÃO DE LISTAS COM COMPONENTE (através de loop/map)
const cars = [
  {id:1, brand: 'Ferrari', color: 'vermelho', km: 1100},
  {id:2, brand: 'Fiat', color: 'amarelo', km: 0},
  {id:3, brand: 'Hiundai', color: 'azul', km: 2350},
]
// FRAGMENTS
import Fragments from './components/Fragments'
// CHILDREN
import Container from './components/Container'
// FUNÇÃO EM PROP
import ExecuteFunction from './components/ExecuteFunction'
// STATE LIFT (ELEVAÇÃO DO STATE)
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {
  // FUNÇÃO EM PROP
  function showMessage() {
    console.log('Função em prop. Evento do componente pai')
  }


  // STATE LIFT (ELEVAÇÃO DO STATE)
  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  
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

      {/* RENDERIZAÇÃO DE LISTAS COM COMPONENTE  - através de loop/map*/}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}

      {/* FRAGMENTS */}
      <Fragments/>

      {/* CHILDREN */}
      <Container>
        <div>
          <p>Conteúdo que vai ser inserido no meu componente container, através do props children, abaixo do h1 que está lá.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum numquam voluptatem hic maiores quibusdam maxime? Harum tempora culpa sapiente dolorum id! Aut iste iusto laborum excepturi nulla itaque molestiae. Asperiores?</p>
        </div>
      </Container>

      {/* FUNÇÃO EM PROP */}
      <ExecuteFunction myFunction={showMessage}/>

      {/* STATE LIFT (ELEVAÇÃO DO STATE) */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
