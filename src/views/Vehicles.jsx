import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom';

const Vehicles = () => {
    const {id} = useParams()
    const [vehicle, setVehicle] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/vehicles/${id}/`)
            .then(response => setVehicle(response.data))
            .catch(err => console.log(err))
    }, [vehicle])

  return (
    <div>
        {
            vehicle&&
                <div>
                    <h1>{vehicle.name}</h1>
                    <p>name: {vehicle.name}</p>
                    <p>manufacturer: {vehicle.manufacturer}</p>
                    <p>model: {vehicle.model}</p>
                </div>
        }
    </div>
  )
}

export default Vehicles