import './App.css'

// IMPORTANDO COMPONENTES
import FirstComponent from './components/FirstComponent'
// TEMPLATE EXPRESSIONS
import TemplateExpressions from './components/TemplateExpressions'
// HIERARQUIA DE COMPONENTES
import HierarquiaComponents from './components/HierarquiaComponents'
// EVENTS
import Events from './components/Events'


function App() {

  return (
    <>
      <h1>2_FUNDAMENTOS</h1>
      <FirstComponent/>

      {/* TEMPLATE EXPRESSIONS */}
      <TemplateExpressions/>

      {/* HIERARQUIA DE COMPONENTES */}
      <HierarquiaComponents/>

      {/* EVENTS */}
      <Events/>
    </>
  )
}

export default App
