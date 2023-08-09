import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (        
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/#">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start ml-5">
                    <NavLink className="navbar-item" to="/category/esculturas">Esculturas</NavLink>
                    <NavLink className="navbar-item" to="/category/pinturas">Pinturas</NavLink>
                </div>
                <div className="navbar-end mr-5">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar