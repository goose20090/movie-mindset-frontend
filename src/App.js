
import {AppContainer} from './styled-components/Container.style'
import { Route, Switch } from "react-router-dom";
import { StyledNavBar } from "./styled-components/NavBar.style";
import Home from './components/Home';
import { useEffect, useState } from 'react';
import {StyledMovieList} from "./styled-components/MovieList.style";
import { StyledMovie } from './styled-components/Movie.style';


function App() {

  const [movies, setMovies] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/movies')
    .then(res=> res.json())
    .then((res)=>{
      setMovies(res)
      console.log(res)
    })
  },[])
  return (
    <AppContainer>
      <StyledNavBar/>
      <Switch>
        <Route path = "/movies">
          <StyledMovieList>
            <h1>It's time to watch some movies!</h1>
            {movies.map((movie)=> <StyledMovie key={movie.id} movie = {movie}/>)}
          </StyledMovieList>
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
