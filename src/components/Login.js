import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { StyledCoolButton } from "../component-styles/CoolButton.style";
import { StyledLoginSelect } from "../component-styles/LoginSelect.style";
import { StyledSignUpForm } from "../component-styles/SignUpForm.style";
import { StyledSimpleButton } from "../component-styles/SimpleButton.style";

function Login({currentUser, setCurrentUser, users, className, handleAddToUsers}){
    const [loggedIn, setLoggedIn] = useState(false)

    const history = useHistory();

    function handleLogin(e){
        const loggedInUser = users.find((user)=> user.name === e.value[0])
        setCurrentUser(loggedInUser)
        setLoggedIn(!loggedIn)
    }

    function handleLogout(e){
        if (history.location.pathname === "/reviews"){
            history.push("/");
        }
        setLoggedIn(!loggedIn)
        setCurrentUser(false)
    }

    function handleSignUpSubmit(newUser){
        fetch('http://localhost:9292/users', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: `${newUser}`
        }),
        })
        .then(res=>res.json())
        .then(res=>{
            setCurrentUser(res)
            setLoggedIn(!loggedIn)
            handleAddToUsers(res)
        })

    
    }
    return(
        <div className={className}>
        {loggedIn? 
            <div id = 'logout-hub'>
            <h3>Welcome, {currentUser.name}! </h3>
            <StyledSimpleButton id = "logout-button" buttonLabel = "LOGOUT" handleClick={handleLogout}></StyledSimpleButton>
            </div>
            :
            <div id = "login-hub">
                <StyledSignUpForm handleSignUpSubmit = {handleSignUpSubmit}/>
                <StyledLoginSelect handleLogin={handleLogin} users = {users}/>
                {/* <select id = "login" onChange = {handleLogin}>
                    <option value = "">Login</option>
                    {users? users.map((user)=> <option key = {user.id} value = {user.name}>{user.name}</option>): null}
                </select> */}
            </div>
            }
        </div>
    )
}

export default Login;