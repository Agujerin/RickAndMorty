import {useEffect,useState} from "react"
import fetchRequest from "../helpers/fetchRequest"
import Loader from "./Loader"
import ErrorMsg from "./Error-msg"
import RickAndMortyCard from "./RickAndMortyCard";
import "./RickAndMortyResults.css"
import ConfirmSign from "./ConfirmSign";

let initialData = {}

export default function RickAndMortyFavs(){
    const [data,setData] = useState(initialData)
    const [loader,setLoader] = useState(false)
    const [error,setError] = useState(null)
    const [confirm,setConfirm] = useState(false)
    
    useEffect(()=>{
        if(localStorage.length !== 0) {
            let favs = JSON.parse(localStorage.getItem('userFavs'))
            let url = `https://rickandmortyapi.com/api/character/${favs}`
            fetchRequest(url,{method: "GET"},setLoader,setError,setData)
        }
    },[])
    
    const handleDelete=()=> {
        setConfirm(true)
        window.scroll(0,0)
    }
   
    return(
        <section className="favs-container">
            {(data !== initialData)? <h4 className="app-title">Personajes favoritos</h4>
            : <h4 className="app-title">No tiene personajes favoritos seleccionados</h4>}
            {(loader) && <Loader/>}
            {(error !== null) && <ErrorMsg status={error} />}
            <div className="result-container">
                {(data !== initialData) && data.map((el)=>(<RickAndMortyCard key={el.id} data={el} />))}
            </div>
            {confirm && <ConfirmSign setConfirm={setConfirm} setData={setData} initialData={initialData} />}
            {(data !== initialData) && <button className="delete-btn" onClick={handleDelete}>Borrar Favoritos</button>}
        </section>
    )
}