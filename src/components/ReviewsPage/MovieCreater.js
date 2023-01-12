import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { StyledSimpleButton } from "../../component-styles/Misc/SimpleButton.style";

function MovieCreater({className, setIsCreatingMovie, handleAddMovie, setReviewingMovie, setIsSearching}){
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
        .then((res)=> {
            handleAddMovie(res)
            setReviewingMovie(res)
            setIsCreatingMovie(false)
            setIsSearching(false)
            console.log(res.title)
            toast(`'${res.title}' added to reviwable movies`,{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        })
    }
    return(
        <div className={className}>
            {formSubmitted?
            <div>
                <h2>
                    Add {movieForm.title} to reviewable movies?
                </h2>
                <div className = "options">
                    <StyledSimpleButton handleClick= {onAddMovie} buttonLabel = "Yes"/>
                    <StyledSimpleButton handleClick= {()=> setIsFormSubmitted(false)} buttonLabel = "Cancel"/>
                </div>
            </div>
            :
            <div>
                <h2 id = "form-copy">Add a movie for people to review:</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input name = "title" type = "text" placeholder="e.g. Star Wars" value = {movieForm.title} onChange = {handleChange}></input>
                </form>
                <div className= "options">
                        <StyledSimpleButton handleClick={handleSubmit} buttonLabel = "Submit"/>
                        <StyledSimpleButton handleClick={()=> setIsCreatingMovie(false)} buttonLabel = "Cancel"/>
                </div>
            </div>
            }

        </div>
    )
}

export default MovieCreater;