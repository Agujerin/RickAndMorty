import { NavLink } from "react-router-dom";
import "./RickAndMortyNavMenu.css"

export default function RickAndMortyNavMenu(){
    return(
        <nav className="nav-menu">
            <NavLink exact to="/" className="nav-menu-item" activeClassName="active">Home</NavLink>
            <NavLink exact to="/favorites" className="nav-menu-item" activeClassName="active">Favoritos</NavLink>
            <NavLink exact to="/about" className="nav-menu-item" activeClassName="active">Sobre Mí</NavLink>
        </nav>
    )
}