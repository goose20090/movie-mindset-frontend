import React, {useState} from "react";

function MovieSearcher({className, movies, handleMovieClick, setIsCreatingMovie, setIsCreatingReview}){

    const [movieShowing, setMoviesShowing] = useState([...movies])
    const [formData, setFormData] = useState("")


    function onMovieClick(id){
        handleMovieClick(id)
    }

    function handleChange(e){
        // control form with formData state
        setFormData(e.target.value)

        // if form is empty, make list all movies
        if(!e.target.value){
            setMoviesShowing([...movies])
        }

        // else show movies with title matching search value
        else{
         let searchedMoviesArr = [...movies].filter((movie)=>
         movie.title.split("").slice(0,e.target.value.length).join("").toLowerCase() === e.target.value.toLowerCase())
         setMoviesShowing(searchedMoviesArr)
        }
    }


    return(
        <div className={className}>
            <h4 id = "close-button" onClick = {()=>
                setIsCreatingReview(false)
                }>X</h4>
            <h2>
                Pick a movie to review or <span id = "create-review-link" onClick = {()=> setIsCreatingMovie(true)}>enter a new one</span>
            </h2>
            <div id = "show-movies">
            <form onSubmit={(e)=> e.preventDefault()}>
                <input id = 'search-bar' type={"text"} placeholder= "search for a movie e.g. Fargo" value = {formData} onChange= {handleChange}/>
            </form>
                <ul>
                    {movieShowing.map((movie)=> <li key = {movie.id} onClick= {()=>{onMovieClick(movie.id)}}>{movie.title}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default MovieSearcher