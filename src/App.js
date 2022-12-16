import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import {StyledMainAppContainer} from "./component-styles/MainAppContainer.style"
import { StyledMoviePage } from "./component-styles/MoviePage.style";
import { StyledNavBar } from "./component-styles/NavBar.style";
import { StyledReviewsPage } from "./component-styles/ReviewsPage.style";

function App(){
  // state for all users
  const [users, setUsers] = useState([])
  // state for all movies
  const [movies, setMovies] = useState([])

  // Fetching movies and users from backend and setting relevant states as response values
  useEffect(()=>{
    fetch('http://localhost:9292/movies')
    .then(res=>res.json())
    .then((fetchedMovies)=> setMovies(fetchedMovies))

    fetch('http://localhost:9292/users')
    .then(res=> res.json())
    .then((fetchedUsers)=> setUsers(fetchedUsers))

  }, [])
  
  // State for user currently logged in
  const [currentUser, setCurrentUser]= useState(null)



  function handleReviewUpdate(updatedReviewObj){
    
    let moviesCopy = [...movies]

    // update specific review content in movieOj
    let movieObj = moviesCopy.find((movie)=> movie.id === updatedReviewObj.movie_id)
    let currentReviewObj = movieObj.reviews.find((review)=> review.id === updatedReviewObj.id)
    currentReviewObj.rating = updatedReviewObj.rating
    currentReviewObj.comment = updatedReviewObj.comment

    setMovies(moviesCopy)
  }

  
  return(
    <StyledMainAppContainer>
      <StyledNavBar users = {users} currentUser = {currentUser} setCurrentUser = {setCurrentUser}/> 
    <Switch>
        <Route path = "/movies">
          <h1>Movies</h1>
          <StyledMoviePage movies = {movies}/>
        </Route>
        <Route path = "/reviews">
          <StyledReviewsPage movies = {movies} currentUser = {currentUser} handleReviewUpdate = {handleReviewUpdate}/>
        </Route>
        <Route exact path = "/">
          <h1>Home</h1>
        </Route>  
      </Switch>   
    </StyledMainAppContainer>
)};

export default App;