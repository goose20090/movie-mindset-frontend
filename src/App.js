
import {AppContainer} from './component-styles/Container.style'
import { NavLink, Route, Switch } from "react-router-dom";
import { StyledNavBar } from "./component-styles/NavBar.style";
import Home from './components/Home';
import { useEffect, useState } from 'react';
import {StyledMovieList} from "./component-styles/MovieList.style";
import { StyledMoviePage } from './component-styles/MoviePage.style';


function App() {

  // Creating state for fetched movies
  const [movies, setMovies] = useState([])
  const [reviews, setReviews] = useState([])
  const [average, setAverage] = useState("")

  // Fetching to backend and setting response to movies state variable
  useEffect(()=>{
    fetch('http://localhost:9292/movies')
    .then(res=> res.json())
    .then((res)=>{
      setMovies(res)
    })

  },[])

  function handleClick(e){
    const urlArr = e.target.href.split("")
    const movieIdArr = urlArr.slice(-2)
    const movieStateId = movieIdArr.filter((char)=> char !== "/").join("")
    const movieBackendId = movies[movieStateId].id

    fetch(`http://localhost:9292/movies/${movieBackendId}/reviews`)
    .then(res=> res.json())
    .then(res=>{
      console.log(res.average_rating)
      setReviews(res.reviews_and_users)
      setAverage(res.average_rating)
    })
    }
  


  // Using movies variable to create links to dynamic, nested routes for each movie
  const renderMovies = Object.keys(movies).map((movieId)=> (
    <li key = {movieId}>
      <NavLink onClick = {handleClick} activeStyle = {{color: "darkred"}}to = {`/movies/${movieId}`}>{movies[movieId].title}</NavLink>
    </li>
  ))


  return (
    <AppContainer>
      <StyledNavBar/>
      <Switch>
        <Route path = "/movies">
          <h1>Pick A Movie!</h1>
          <StyledMoviePage movies = {movies} reviews= {reviews} average = {average}>
            <StyledMovieList>
              <ul>
                {renderMovies}
              </ul>
            </StyledMovieList>
          </StyledMoviePage>
        </Route>
        <Route path = "/users">
          <h1>Users component</h1>
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
