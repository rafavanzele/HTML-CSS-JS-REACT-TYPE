import './App.css'
// CSS DE COMPONENTE
import MyComponent from './components/MyComponent'
// CSS SCOPED
import Title from './components/Title'

function App() {
  // CSS INLINE DINÂMICO
  const n = 15

  // CLASSE DINÂMICA
  const redTitle = true

  return (
    <div>
      {/* CSS GLOBAL (INDEX.CSS) */}
      <h1>CSS NO REACT</h1>

      {/* CSS DE COMPONENTE */}
      <MyComponent/>

      {/* ESTILOS INLINE */}
      <p style={{color: 'green', padding: '20px'}}>Este parágrafo tem estilo inline</p>

      {/* CSS INLINE DINÂMIO */}
      <h2 style={n > 10 ? {color: 'yellow'} : {color: 'red'}}>CSS inline dinâmico</h2>

      {/* CLASSES DINÂMICAS */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Esse texto tem uma classe</h2>

      {/* CSS SCOPED */}
      <Title/>
    </div>
  )
}

export default App
