import './App.css'
// IMPORTANDO IMG DO ASSETS
import chuva2 from './assets/chuva2.jpg'
// USESTATE
import Data from './components/Data'

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
    </div>
  )
}

export default App
