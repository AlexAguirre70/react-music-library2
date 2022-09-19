import { useContext } from 'react'
import{SearchContext} from '../context/SearchContext'

function SeachBar() {
    let {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Enter a search term here"/>
            <button onClick={(e)=>handleSearch(e,term.current.value)}>Search </button>
        </form>
    )
}

export default SeachBar