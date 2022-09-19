// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])
    useEffect (()=> {
        const API_URL = `http://localhost:3000/artist/${id}`
        const fetchData = async ()=>{
            const response = await fetch(API_URL)
            const resData = await response.json()
            return(resData)
        }
        fetchData()
    })
    return (
        <div>
            
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView
