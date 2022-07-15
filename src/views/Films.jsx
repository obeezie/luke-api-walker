import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom';

const Films = () => {
    const {id} = useParams()
    const [film, setFilm] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}/`)
            .then(response => setFilm(response.data))
            .catch(err => console.log(err))
    }, [film])
  return (
    <div>
        {
            film&&
                <div>
                    <h1>{film.title}</h1>
                    <p>Release date: {film.release_date}</p>
                    <p>Director: {film.director}</p>
                    <p>Producer: {film.producer}</p>
                </div>
        }
    </div>
  )
}

export default Films