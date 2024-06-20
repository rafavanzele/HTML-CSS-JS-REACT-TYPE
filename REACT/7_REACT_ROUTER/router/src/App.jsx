import './App.css'

// COMPONENTE BASE
import { Outlet } from 'react-router-dom'

// LINK ENTRE PÁGINAS (NAVBAR/MENU)
import Navbar from './components/Navbar'

// SEARCH
import SearchForm from './components/SearchForm'

function App() {
  
  return (
    <div className='app'>
      <Navbar/>

      <SearchForm/>

      <Outlet/>

      <p>Footer</p>
    </div>
  )
}

export default App
