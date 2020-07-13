import React, {useEffect, useState} from "react"
import axios from "axios"
import Component from "./components/component"

const App = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/character')
            .then((res) => {
                console.log(res)
                setCharacters(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return(
        <div>
            <h1>App</h1>
            <Component data={characters} />
        </div>
    )
}

export default App;