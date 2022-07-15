import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const PageHeader = () => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <span>Search for: </span>
            <label> Category: </label>
            <select name = "categories" value = {category} onChange = {e => setCategory(e.target.value)}>
                <option hidden = "hidden">Choose a category</option>
                <option value = "people">People</option>
                <option value = "films">Films</option>
                <option value = "starships">Starships</option>
                <option value = "vehicles">Vehicles</option>
                <option value = "species">Species</option>
                <option value = "planets">Planets</option>
            </select>
            <label> ID: </label>
            <input type="number" name = "id" value = {id} onChange = {e => setId(e.target.value)} />
            <button type="submit">Search the galaxy</button>
        </form>
    </div>
  )
}

export default PageHeader