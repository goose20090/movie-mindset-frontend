
import {AppContainer} from './styled-components/Container.style'
import { Link, Route, Switch } from "react-router-dom";
import { StyledNavBar } from "./styled-components/NavBar.style";
import Home from './components/Home';
import { useEffect, useState } from 'react';
import {StyledMovieList} from "./styled-components/MovieList.style";
import { StyledMovie } from './styled-components/Movie.style';
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
      console.log(res)
    })
  },[])

  // Using movies variable to create links to dynamic, nested routes for each movie
  const renderMovies = Object.keys(movies).map((movieId)=> (
    <li key = {movieId}>
      <Link to = {`/movies/${movieId}`}>{movies[movieId].title}</Link>
    </li>
  ))

  
  return (
    <AppContainer>
      <StyledNavBar/>
      <Switch>
        <Route path = "/movies">
          <StyledMoviePage>
            <StyledMovieList>
              <h1>It's time to watch some movies!</h1>
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
