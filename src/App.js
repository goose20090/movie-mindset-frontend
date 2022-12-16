import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import {StyledMainAppContainer} from "./component-styles/MainAppContainer.style"
import { StyledMoviePage } from "./component-styles/MoviePage.style";
import { StyledNavBar } from "./component-styles/NavBar.style";
import { StyledUserPage } from "./component-styles/UserPage.style";
import { StyledReviewsPage } from "./component-styles/ReviewsPage.style";

function App(){
  // state for all users
  const [users, setUsers] = useState([])
  // state for all movies
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/movies')
    .then(res=>res.json())
    .then((fetchedMovies)=> setMovies(fetchedMovies))

    fetch('http://localhost:9292/users')
    .then(res=> res.json())
    .then((fetchedUsers)=> setUsers(fetchedUsers))

  }, [])
  
  // set the user currently logged in
  const [currentUser, setCurrentUser]= useState(null)

  // state for all users


  function handleReviewUpdate(updatedUserObj){
    const updatedUsers = users.map((user)=> {
      if (user.id === updatedUserObj.id){
        return updatedUserObj
      }
      else {
        return user;
      }
    })
    setUsers(updatedUsers)
    setCurrentUser(updatedUserObj)
  }

  
  return(
    <StyledMainAppContainer>
      <StyledNavBar users = {users} currentUser = {currentUser} setCurrentUser = {setCurrentUser}/> 
    <Switch>
        <Route path = "/movies">
          <h1>Movies</h1>
          <StyledMoviePage movies = {movies}/>
        </Route>
        <Route path = "/users">
          <h1>Users</h1>
          <StyledUserPage users = {users}/>
        </Route>
        <Route path = "/reviews">
          <StyledReviewsPage currentUser = {currentUser} movies = {movies} handleReviewUpdate = {handleReviewUpdate}/>
        </Route>
        <Route exact path = "/">
          <h1>Home</h1>
        </Route>  
      </Switch>   
    </StyledMainAppContainer>
)};

export default App;