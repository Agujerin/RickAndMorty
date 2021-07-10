import {useState,useEffect} from "react"
import Loader from "./Loader"
import ErrorMsg from "./Error-msg"
import RickAndMortySearch from "./RickAndMortySearch"
import fetchRequest from "../helpers/fetchRequest"
import RickAndMortyResults from "./RickAndMortyResults"
import "../App.css"


let initialData = {}

let initialSearch = ""


export default function RickAndMortyApp(){
    const [data,setData] = useState(initialData)
    const [info,setInfo] = useState("")
    const [page,setPage] = useState(1)
    const [search,setSearch] = useState(initialSearch)
    const [loader,setLoader] = useState(false)
    const [error,setError] = useState(null)
      
    useEffect(()=>{
        let url = "https://rickandmortyapi.com/api/character"
        
        fetchRequest(url,{method: "GET"},setLoader,setError,setData)
    },[])
    
    useEffect(()=>{
        if (search !== initialSearch){
            let url = `https://rickandmortyapi.com/api/character/?name=${search}`
            fetchRequest(url,{method: "GET"},setLoader,setError,setData)
            setSearch(initialSearch)
            setPage(1)
        }
    },[search])
    
    useEffect(()=>{
        if (info !== ""){
            let url = info
            fetchRequest(url,{method: "GET"},setLoader,setError,setData)
            window.scroll(0,0)
        }
    },[info])
    
    return(
        <div className="app-container">
            {(!error) && <RickAndMortySearch setSearch={setSearch}/>}
            {(loader) && <Loader/>}
            {(error !== null) && <ErrorMsg status={error} />}
            {(data !== initialData) && <h4 className="app-title">Listado de Personajes</h4>}
            {(data !== initialData) && <RickAndMortyResults data={data} initialData={initialData} setInfo={setInfo} page={page} setPage={setPage} />}
        </div>
    )
}