
import {AppContainer} from './component-styles/Container.style'
import { NavLink, Route, Switch } from "react-router-dom";
import { StyledNavBar } from "./component-styles/NavBar.style";
import Home from './components/Home';
import { useEffect, useState } from 'react';
import {StyledMovieList} from "./component-styles/MovieList.style";
import { StyledMoviePage } from './component-styles/MoviePage.style';
import { StyledUserPage } from './component-styles/UserPage.style';
import { StyledUserList } from './component-styles/UserList.style';
import { StyledReviewForm } from './component-styles/ReviewForm.style';


function App() {

  // Creating state for fetched movies
  const [movies, setMovies] = useState([])
  const [users, setUsers] = useState([])
  const [reviews, setReviews] = useState([])
  const [average, setAverage] = useState("")
  const [currentMovieReview, setCurrentMovieReview] = useState({review: {}, user: {}, rating: ""})

  const [currentUserReview, setCurrentUserReview] = useState({review: {}, movie: {}, rating: ""})
  const [currentUsersReviews, setCurrentUsersReviews] = useState([{review: {}, movie: {title: ""},}])

  // Fetching to backend and setting response to movies state variable
  useEffect(()=>{
    fetch('http://localhost:9292/movies')
    .then(res=> res.json())
    .then((res)=>{
      setMovies(res)
    })

    fetch('http://localhost:9292/users')
    .then(res=> res.json())
    .then((res)=>{
      setUsers(res)
    })

  },[])

  function handleNestedMovieClick(e){
    const urlArr = e.target.href.split("")
    const movieIdArr = urlArr.slice(-2)
    const movieStateId = movieIdArr.filter((char)=> char !== "/").join("")
    const movieBackendId = movies[movieStateId].id

    fetch(`http://localhost:9292/movies/${movieBackendId}/reviews`)
    .then(res=> res.json())
    .then(res=>{
      setReviews(res.reviews_and_users)
      setAverage(res.average_rating)
      setCurrentMovieReview(res.reviews_and_users[0])

    })
    }

    function handleNestedUserClick(e){
      const urlArr = e.target.href.split("")
    const userIdArr = urlArr.slice(-2)
    const userStateId = userIdArr.filter((char)=> char !== "/").join("")
    const userBackendId = users[userStateId].id

    fetch(`http://localhost:9292/users/${userBackendId}/reviews`)
    .then(res=> res.json())
    .then(res=>{
      console.log(res)
      setCurrentUsersReviews(res)
      setCurrentUserReview(res[0])
    })
    }


  // Using movies variable to create links to dynamic, nested routes for each movie
  const renderMovies = Object.keys(movies).map((movieId)=> (
    <li key = {movieId}>
      <NavLink onClick = {handleNestedMovieClick} activeStyle = {{color: "darkred"}}to = {`/movies/${movieId}`}>{movies[movieId].title}</NavLink>
    </li>
  ))

  const renderUsers = Object.keys(users).map((userId)=> (
    <li key = {userId}>
      <NavLink onClick = {handleNestedUserClick} activeStyle = {{color: "darkred"}}to = {`/users/${userId}`}>{users[userId].name}</NavLink>
    </li>
  ))

  return (
    <AppContainer>
      <StyledNavBar/>
      <Switch>
        <Route path = "/movies">
          <h1>Pick A Movie!</h1>
          <StyledMoviePage movies = {movies} reviews= {reviews} average = {average} currentReview = {currentMovieReview} setCurrentReview = {setCurrentMovieReview}>
            <StyledMovieList>
              <ul>
                {renderMovies}
              </ul>
            </StyledMovieList>
          </StyledMoviePage>
        </Route>
        <Route path = "/users">
          <h1>Our Amazing Users</h1>
          <StyledUserPage users= {users} currentUsersReviews = {currentUsersReviews} currentReview= {currentUserReview} setCurrentReview = {setCurrentUserReview}>
            <StyledUserList>
              <ul>
                {renderUsers}
              </ul>
            </StyledUserList>
          </StyledUserPage>
        </Route>
        <Route path = "/reviews">
          <StyledReviewForm>
            <h1>My Reviews</h1>
            <form>
              <select>
                {console.log(movies)}
                {movies.map((movie)=> <option value = {movie.title}>{movie.title}</option>)}
              </select>
              <input id = "comment-input">
              </input>
              <button>Submit</button>
            </form>
          </StyledReviewForm>
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
