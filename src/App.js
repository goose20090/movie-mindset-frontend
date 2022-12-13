import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import {StyledMainAppContainer} from "./component-styles/MainAppContainer.style"
import { StyledMoviePage } from "./component-styles/MoviePage.style";
import { StyledNavBar, StyledLogin } from "./component-styles/NavBar.style";
import { StyledUserPage } from "./component-styles/UserPage.style";
import {useQuery} from "@tanstack/react-query";

function App(){

  // fetching movies with nested reviews and users
  const {data: movies, isLoading: moviesLoading} = useQuery(['fetch-movies'], ()=> fetch('http://localhost:9292/movies').then(res=>res.json()))
  // fetching users
  const {data: users, isLoading: usersLoading} = useQuery(['fetch-users'], ()=> fetch('http://localhost:9292/users').then(res=>res.json()))
  // set the user currently logged in
  const [currentUser, setCurrentUser]= useState({})
return(
    <StyledMainAppContainer>
      <StyledNavBar >
        <StyledLogin users = {users} currentUser = {currentUser} setCurrentUser = {setCurrentUser}/>
      </StyledNavBar> 
    <Switch>
        <Route path = "/movies">
          <h1>Movies</h1>
          <StyledMoviePage movies = {movies} isLoading = {moviesLoading}/>
        </Route>
        <Route path = "/users">
          <h1>Users</h1>
          <StyledUserPage users = {users} isLoading = {usersLoading}/>
        </Route>
        <Route exact path = "/">
          <h1>Home</h1>
        </Route>  
      </Switch>   
    </StyledMainAppContainer>
)};

export default App;