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


  // Event handlers for review PATCH requests

  function updateMoviesState(updatedReviewObj){

    let moviesArr = [...movies].map((movie=>{
      if(movie.id === updatedReviewObj.movie_id){

        let reviewToUpdate = movie.reviews.find((review)=> review.id ===updatedReviewObj.id)

        reviewToUpdate.rating = updatedReviewObj.rating
        reviewToUpdate.comment = updatedReviewObj.comment

        return movie
      }
      else return movie
    }))
    setMovies(moviesArr)
  }

  // Even handlers for review POST requests

  function handleAddReview(newReview){
    addToMoviesState(newReview)
    addToUsersState(newReview)
  }

  function addToMoviesState(newReview){

    let moviesArr = [...movies]

    let reviewedMovie = moviesArr.find((movie)=> movie.id === newReview.movie_id)

    reviewedMovie.reviews.push(newReview)

    setMovies(moviesArr)
  }

  function addToUsersState(newReview){
    let usersArr = [...users]

    let user = usersArr.find((iteratedUser)=> iteratedUser.id === newReview.user_id)

    user.reviews.push(newReview)

    setUsers(usersArr)
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
          <StyledReviewsPage movies = {movies} currentUser = {currentUser} handleReviewUpdate = {updateMoviesState} handleAddReview = {handleAddReview}/>
        </Route>
        <Route exact path = "/">
          <h1>Home</h1>
        </Route>  
      </Switch>   
    </StyledMainAppContainer>
)};

export default App;