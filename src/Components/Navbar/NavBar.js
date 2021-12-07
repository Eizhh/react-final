import React from 'react'
import {Link ,NavLink} from 'react-router-dom'
import { CardWidget } from './CardWidget'
import './Navbar.scss'

export function NavBar() {
    return (
      <header className="header">
                <div> 
                    <nav>
                      <NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink>
                      <NavLink activeClassName={'activeLink'} exact to="/productos/Cripto">Cripto</NavLink>
                      <NavLink activeClassName={'activeLink'} exact to="/productos/CriptoNew">CriptoNew</NavLink>
                      <NavLink activeClassName={'activeLink'} exact to="/productos/CriptoReact">CriptoReact</NavLink>
                      <NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink>
                      <Link to="/cart"><CardWidget/></Link>
                      
                    </nav>
                </div>
      </header>
    )
}


