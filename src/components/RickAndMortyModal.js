import React from "react"
import ReactDOM from "react-dom"
import "./RickAndMortyModal.css"

export default function RickAndMortyModal({data,setModal}){
    let name = data.data.name
    let img = data.data.image
    let origin = data.data.origin.name
    let species = data.data.species
    let type = data.data.type
    let location = data.data.location.name
    
    const handleClose=()=> setModal(false)
    
    return ReactDOM.createPortal(
        <div className="modal-container">
            <article className="modal">
                <button className="close-btn" onClick={handleClose}>x</button>
                <img src={img} alt={name} className="modalImg"></img>
                <h2 className="name">{name}</h2>
                <p className="info">Origen: {origin}</p>
                <p className="info">Especie: {species}</p>
                <p className="info">Tipo: {type}</p>
                <p className="info">Ubicación: {location}</p>
            </article>
        </div>, 
        document.getElementById("modal")
    )
}