import React from "react";
import { Switch, Route } from "react-router-dom";
import {StyledMainAppContainer} from "./component-styles/MainAppContainer.style"
import { StyledNavBar, StyledNavLink } from "./component-styles/NavBar.style";

function App(){

return(
  <StyledMainAppContainer>
    <StyledNavBar> 
      <StyledNavLink to = "/" exact activeStyle = {{background:"darkred"}}>Home</StyledNavLink>
      <StyledNavLink to = "/movies" exact activeStyle = {{background:"darkred"}}>Movies</StyledNavLink>
      <StyledNavLink to = "/users" exact activeStyle = {{background:"darkred"}}>Users</StyledNavLink>
    </StyledNavBar>

 <Switch>
      <Route exact path = "/movies">
        <h1>Movies</h1>
      </Route>
      <Route exact path = "/users">
        <h1>Users</h1>
      </Route>
      <Route exact path = "/">
        <h1>Home</h1>
      </Route>
    
    </Switch>   

  </StyledMainAppContainer>
)};

export default App;