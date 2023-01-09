import React, { useState } from "react";

function MovieCreater({className, setIsCreatingMovie, handleAddMovie}){
    const [formSubmitted, setIsFormSubmitted] = useState(false)
    const [movieForm, setMovieForm] = useState({title: ""})


    function handleSubmit(e){
        e.preventDefault()
        setIsFormSubmitted(!formSubmitted)

    }

    function handleChange(e){
        setMovieForm({
            ...movieForm,
            [e.target.name]: e.target.value
        })
    }

    function onAddMovie(){
        handleAddMovie(movieForm)
        fetch('http://localhost:9292/movies', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieForm),
        })
        .then(res=>res.json())
        .then(res=> handleAddMovie(res))
    }
    return(
        <div className={className}>
            {formSubmitted?
            <div>
                <h2>
                    Add {movieForm.title} to reviewable movies?
                </h2>
                <button onClick = {onAddMovie}>Add</button>
                <button onClick = {()=> setIsFormSubmitted(false)}>Cancel</button>
            </div>
            :
            <div>
                <h4 id = "close-button" onClick = {()=> setIsCreatingMovie(false)}>X</h4>
                <h1>Add a movie:</h1>
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input name = "title" type = "text" placeholder="e.g. Star Wars" value = {movieForm.title} onChange = {handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
            }

        </div>
    )
}

export default MovieCreater;