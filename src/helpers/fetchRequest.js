export default async function fetchRequest(url,options,setLoader,setError,setData){  
    setLoader(true)                           
    try {
        let res = await fetch(url,options)
        let json = await res.json()
        
        if (!res.ok) {
            const err = {"status": res.status, "statusText": res.statusText}
            throw err
        }
        setData(json) 
        
    }catch (err) {
        let message = err.statusText || "Ha ocurrido un error en la petición"
        let status = err.status || "00"
        setError(`Error ${status}: ${message}`)
    }
    setLoader(false)
}
