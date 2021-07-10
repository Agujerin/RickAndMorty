import { useHistory } from "react-router-dom"
import RickAndMortyCard from "./RickAndMortyCard"
import "./RickAndMortyResults.css"

export default function RickAndMortyResults({data,initialData,setInfo,page,setPage}){
    let history = useHistory() 
    
    const handlePrev=()=>{
        setPage(page - 1)
        history.push(`?page=${page - 1}`) 
        setInfo(data.info.prev)
    }
    
    const handleNext=()=>{
        setPage(page + 1)
        history.push(`?page=${page + 1}`)
        setInfo(data.info.next)
    }
    
    return(
        <section>
            <div className="result-container">
                {(data !== initialData) && data.results.map((el)=>(<RickAndMortyCard key={el.id} data={el} />))}
            </div>
            <div className="result-buttons-container">
                {(data.info.prev) && <button onClick={handlePrev}>Anterior</button>}
                {(!data.info.next && page === 1)? <></> : <b>{`Página ${page}`}</b>}
                {(data.info.next) &&<button onClick={handleNext}>Próxima</button>}
            </div>
        </section>
    )
}