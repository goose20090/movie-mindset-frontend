
import {AppContainer} from './styled-components/Container.style'
import { Route, Switch } from "react-router-dom";
import { StyledNavBar } from "./styled-components/NavBar.style";
import Home from './components/Home';
import Movies from './components/Movies';
import { useEffect } from 'react';


function App() {

  useEffect(()=>{
    fetch('http://localhost:9292/movies')
    .then(res=> res.json())
    .then(res=> console.log(res))
  },[])
  return (
    <AppContainer>
      <StyledNavBar/>
      <Switch>
        <Route path = "/movies">
          <Movies>
            <h1>It's time to watch some movies!</h1>
          </Movies>
        </Route>
        <Route path="/">
          <Home>
            <h1>Welcome to the Amazing Movie App!</h1>
          </Home>
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
