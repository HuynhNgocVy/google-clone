import { useState, useContext, createContext } from "react";
import { useLocation } from 'react-router-dom'
export const ResultSearch = createContext()

function ResultSearchContext({ children }) {
    const [ resultSearch, setResultSearch ] = useState()
    const endLink = useLocation()
    return (
        <ResultSearch.Provider value={{ resultSearch, setResultSearch, endLink }}>
            {children}
        </ResultSearch.Provider>
    )
}
export default ResultSearchContext

export const useResultContext = () => useContext(ResultSearch)