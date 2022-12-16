import React, {useState} from "react";

function ReviewCreateHub({className, movies}){
    const [movieShowing, setMoviesShowing] = useState([...movies])
    const [formData, setFormData] = useState("")


    function handleChange(e){
        setFormData(e.target.value)

        if(!e.target.value){
            setMoviesShowing([...movies])
        }

        else{
         let searchedMoviesArr = [...movies].filter((movie)=>
         movie.title.split("").slice(0,e.target.value.length).join("").toLowerCase() === e.target.value.toLowerCase())
         setMoviesShowing(searchedMoviesArr)}
    }
    return(
        <div className={className}>
            <h2>
                Pick a movie to review:
            </h2>
            <div id = "show-movies">
            <form>
                <input type={"text"} placeholder= "search for a movie e.g. Fargo" value = {formData} onChange= {handleChange}/>
            </form>
                <ul>
                    {movieShowing.map((movie)=> <li>{movie.title}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ReviewCreateHub