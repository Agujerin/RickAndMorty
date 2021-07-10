import React from "react"
import "./ConfirmSign.css"

export default function ConfirmSign({setConfirm,setData,initialData}){
        
    const handleCancel=()=> setConfirm(false)
    
    const handleConfirm=()=> {
        localStorage.clear()
        setData(initialData)
        window.location.reload()
    }
    
    return (
        <div className="confirm-sign">
            <h4>¿Está seguro de que desea eliminar los Favoritos?</h4>
            <button onClick={handleConfirm} className="confirm-btn">Ok</button>
            <button onClick={handleCancel} className="cancel-btn">Cancelar</button>
        </div>
    )
}