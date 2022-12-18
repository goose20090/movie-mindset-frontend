import React, {useState} from "react";
import { StyledSignUpForm } from "../component-styles/SignUpForm.style";

function Login({currentUser, setCurrentUser, users, className}){
    const [loggedIn, setLoggedIn] = useState(false)

    function handleLogin(e){
        const loggedInUser = users.find((user)=> user.name === e.target.value)
        setCurrentUser(loggedInUser)
        setLoggedIn(!loggedIn)
    }

    function handleLogout(e){
        setLoggedIn(!loggedIn)
        setCurrentUser(false)
    }
    return(
        <div className={className}>
        {loggedIn? 
            <>
            <h2>Welcome, {currentUser.name}! </h2>
            <button onClick={handleLogout}>Logout</button>
            </>
            :
            <div>
                <StyledSignUpForm/>
                <label htmlFor= "login">Login: </label>
                <select id = "login" onChange = {handleLogin}>
                    <option value = "">Login</option>
                    {users? users.map((user)=> <option key = {user.id} value = {user.name}>{user.name}</option>): null}
                </select>
            </div>
            }
        </div>
    )
}

export default Login;