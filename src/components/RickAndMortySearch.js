import {useState} from "react"
import "./RickAndMortySearch.css"

export default function RickAndMortySearch({setSearch}){
    const [name, setName] = useState("")
    
    const handleSearch=(e)=>{
        e.preventDefault()
        setSearch(name)
    }
    
    const handleChange=(e)=> setName(e.target.value)
    
    return(
        <form className="search-form">
            <input type="search" className="search-input" id="search" placeholder="Buscar" onChange={handleChange} value={name}/>
            <button type="submit" className="submit-btn" onClick={handleSearch}>
                <i className="fas fa-search"></i>
            </button>
        </form>
    )
}