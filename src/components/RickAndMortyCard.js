import {useState} from "react"
import { useLocation } from "react-router-dom"
import "./RickAndMortyCard.css"
import RickAndMortyModal from "./RickAndMortyModal"

let favList = [259]

export default function RickAndMortyCard(data){
    const [modal,setModal] = useState(false)
    const [sign,setSign] = useState(false)
    let {pathname} = useLocation()
    
    let img = data.data.image
    let name = data.data.name
    let id = data.data.id

    const handleClick=()=> setModal(true)
    
    const handleFav=(e)=>{
        setSign(true)
        setTimeout(() => setSign(false),1000);
        let favName = e.target.id
        favList.push(favName)
        localStorage.setItem('userFavs', JSON.stringify(favList))
    }

    return(
        <div className="card">
            {sign && <h5 className="add-sign">{"Agregado a Favoritos"}</h5>}
            {(pathname.includes("/favorites")) || <i className="fas fa-heart" onClick={handleFav} id={id}></i>}
            <img src={img} alt={name} className="card-img"></img>
            <h4 className="card-name">{name}</h4>
            <button onClick={handleClick} className="card-btn">+</button>
            {modal && <RickAndMortyModal data={data} setModal={setModal}/>}
        </div>
    )
}