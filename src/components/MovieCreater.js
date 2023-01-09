import React, { useState } from "react";
import {faker} from '@faker-js/faker'

function MovieCreater({className, setIsCreatingMovie}){
    const genres = ["Action", "Horror", "Drama", "Thriller", "Western", "Sci-Fi", "Comedy", "Crime", "Romance", "Adventure"]
    const streamingServices = ["Disney+", "Netflix", "Amazon Prime"]


    const [formSubmitted, setIsFormSubmitted] = useState(false)

    const [movieForm, setMovieForm] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        setIsFormSubmitted(!formSubmitted)

    }

    function handleChange(e){
        setMovieForm(e.target.value)
    }
    return(
        <div className={className}>
            {formSubmitted?
            <div>
                <h4 id = "close-button" onClick = {()=> setIsFormSubmitted(false)}>X</h4>
                <h1>
                    Do you mean?
                </h1>

                <h2>{movieForm}</h2>
                <h4>{faker.date.past(80).toLocaleDateString()}</h4>
            </div>
            :
            <div>
                <h4 id = "close-button" onClick = {()=> setIsCreatingMovie(false)}>X</h4>
                <h1>Add a movie:</h1>
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input type = "text" placeholder="e.g. Star Wars" value = {movieForm} onChange = {handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
            }

        </div>
    )
}

export default MovieCreater;