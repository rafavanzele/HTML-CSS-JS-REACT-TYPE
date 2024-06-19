import './App.css'

// COMPONENTE BASE
import { Outlet } from 'react-router-dom'

// LINK ENTRE PÁGINAS (NAVBAR/MENU)
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className='app'>
      <Navbar/>

      <Outlet/>

      <p>Footer</p>
    </div>
  )
}

export default App
