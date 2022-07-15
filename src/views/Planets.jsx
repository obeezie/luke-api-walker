import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom';



const Planets = () => {
    const {id} = useParams();
    const [planet, setPlanet] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then(response => setPlanet(response.data))
            .catch(err => console.log(err))
    }, [planet])


  return (
    <div>
        {
            planet&&
                <div>
                    <h1>{planet.name}</h1>
                    <p>climate: {planet.climate}</p>
                    <p>population: {planet.population}</p>
                    <p>terrain: {planet.terrain}</p>
                </div>
        }
    </div>
  )
}

export default Planets
