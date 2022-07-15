import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom';

const Starships = () => {
    const {id} = useParams()
    const [starship, setStarship] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/`)
            .then(response => setStarship(response.data))
            .catch(err => console.log(err))
    }, [starship])

  return (
    <div>
        {
            starship&&
                <div>
                    <h1>{starship.name}</h1>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Starship class: {starship.starship_class}</p>
                    <p>Model: {starship.model}</p>
                </div>
                
        }
    </div>
  )
}

export default Starships