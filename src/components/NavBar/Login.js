import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { StyledLoginSelect } from "../../component-styles/NavBar/LoginSelect.style";
import { StyledSignUpForm } from "../../component-styles/NavBar/SignUpForm.style";
import { StyledSimpleButton } from "../../component-styles/Misc/SimpleButton.style";

function Login({currentUser, setCurrentUser, users, className, handleAddToUsers}){
    const [loggedIn, setLoggedIn] = useState(false)

    const history = useHistory();

    // Login selected User
    function handleLogin(e){
        const loggedInUser = users.find((user)=> user.name === e.value[0])
        setCurrentUser(loggedInUser)
        setLoggedIn(!loggedIn)
    }

    // Logout selected User

    function handleLogout(e){
        // navigate user to non-user-specifc page to prevent app crash
        if (history.location.pathname === "/reviews"){
            history.push("/");
        }
        setLoggedIn(!loggedIn)
        setCurrentUser(false)
    }

    // POST new user to backend
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
            </div>
            }
        </div>
    )
}

export default Login;