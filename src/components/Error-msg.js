import React from "react"
import "./Error-msg.css"

export default function ErrorMsg({status}){
    return(
        <div className="error-container">
            <p>{status}</p>
            <button onClick={()=>{window.location.reload()}}>Volver</button>
        </div>
    )
}