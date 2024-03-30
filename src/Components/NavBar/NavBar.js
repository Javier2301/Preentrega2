import CartWidget from "../CartWidget/CartWidget"
import '../NavBar/NavBar.css'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <h3>ColTelefonos.com</h3>
            </Link>
            <div id='categoriesBlock'>
                <NavLink to={'/category/celular'}>Celulares</NavLink>
                <NavLink to={'/category/tablets'}>Tablets</NavLink>
                <NavLink to={'/category/NoteBooks'}>NoteBooks</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar