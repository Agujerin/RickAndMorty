import logo from "../assets/rickandmortylogo.png"
import "./RickAndMortyHeader.css"

export default function RickAndMortyHeader(){
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header-logo"></img>
            <h3 className="header-title">Buscador de personajes de Rick And Morty</h3>
        </header>
    )
}