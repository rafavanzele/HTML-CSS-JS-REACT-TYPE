// LINK ENTRE PÁGINAS (NAVBAR/MENU)
import { Link, NavLink } from "react-router-dom"

// ESTILOS
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        {/* <Link to={'/'}>Home</Link> */}
        {/* <Link to={'/contact'}>Contato</Link> */}

        <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to={'/contact'} className={({isActive}) => (isActive ? 'active' : '')}>Contato</NavLink>
    </div>
  )
}

export default Navbar