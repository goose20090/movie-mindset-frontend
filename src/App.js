
import {AppContainer} from './styled-components/Container.style'
import { NavLink, Route, Switch } from "react-router-dom";
import { StyledNavBar } from "./styled-components/NavBar.style";
import Home from './components/Home';
import { useEffect, useState } from 'react';
import {StyledMovieList} from "./styled-components/MovieList.style";
import { StyledMoviePage } from './styled-components/MoviePage.style';


function App() {

  // Creating state for fetched movies
  const [movies, setMovies] = useState([])

  // Fetching to backend and setting response to movies state variable
  useEffect(()=>{
    fetch('http://localhost:9292/movies')
    .then(res=> res.json())
    .then((res)=>{
      setMovies(res)
    })
  },[])

  // Using movies variable to create links to dynamic, nested routes for each movie
  const renderMovies = Object.keys(movies).map((movieId)=> (
    <li key = {movieId}>
      <NavLink activeStyle = {{color: "darkred"}}to = {`/movies/${movieId}`}>{movies[movieId].title}</NavLink>
    </li>
  ))

  return (
    <AppContainer>
      <StyledNavBar/>
      <Switch>
        <Route path = "/movies">
          <h1>Pick A Movie!</h1>
          <StyledMoviePage movies = {movies}>
            <StyledMovieList>
              <ul>
                {renderMovies}
              </ul>
            </StyledMovieList>
          </StyledMoviePage>
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
