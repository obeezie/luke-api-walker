import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom';

const People = () => {
    const {id} = useParams()
    const [person, setPerson] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(response => setPerson(response.data))
            .catch(err => console.log(err))
    }, [person])
  return (
    <div>
        {
            person&&
                <div>
                    <h1>{person.name}</h1>
                    <p>Gender: {person.gender}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair color: {person.hair_color}</p>
                    <p>Eye color: {person.eye_color}</p>
                </div>
        }
    </div>
  )
}

export default People