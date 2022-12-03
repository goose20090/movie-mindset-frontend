import React from "react";
import { Switch, Route } from "react-router-dom";
import {StyledMainAppContainer} from "./component-styles/MainAppContainer.style"
import { StyledMovieList } from "./component-styles/MovieList.style";
import { StyledMoviePage } from "./component-styles/MoviePage.style";
import { StyledNavBar } from "./component-styles/NavBar.style";
import { StyledUserList } from "./component-styles/UserList.style";
import { StyledUserPage } from "./component-styles/UserPage.style";

function App(){

return(
  <StyledMainAppContainer>
    <StyledNavBar/> 
   <Switch>
      <Route exact path = "/movies">
        <h1>Movies</h1>
        <StyledMoviePage>
          <StyledMovieList></StyledMovieList>
        </StyledMoviePage>
      </Route>
      <Route exact path = "/users">
        <h1>Users</h1>
        <StyledUserPage>
          <StyledUserList></StyledUserList>
        </StyledUserPage>
      </Route>
      <Route exact path = "/">
        <h1>Home</h1>
      </Route>  
    </Switch>   

  </StyledMainAppContainer>
)};

export default App;