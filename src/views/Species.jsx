import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom';

const Species = () => {
    const {id} = useParams()
    const [specie, setSpecie] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}/`)
            .then(response => setSpecie(response.data))
            .catch(err => console.log(err))
    }, [specie])

  return (
    <div>
        {
            specie&&
                <div>
                    <h1>{specie.name}</h1>
                    <p>name: {specie.name}</p>
                    <p>classification: {specie.classification}</p>
                    <p>language: {specie.language}</p>
                </div>
        }
    </div>
  )
}

export default Species