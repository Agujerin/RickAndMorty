import myLogo from "../assets/favicon-animado.ico"
import "./RickAndMortyAbout.css"

export default function RickAndMortyAbout(){
    return(
        <div className="about-container">
            <img src={myLogo} alt="myLogo"/>
            <h3>Página creada por Agustín Rodríguez Minaverry utilizando la The Rick and Morty API</h3>
            <a href="https://rickandmortyapi.com/">rickandmortyapi.com</a>
        </div>
    )
}