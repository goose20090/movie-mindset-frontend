import React from "react";
import CoolButton from "./CoolButton";


function Home({className}){
    return(
        <div className={className} id = "home">

            <p>
                Welcome to Celluoid! A movie review website for movie-lovers around the world.
            </p>

            <p>
                Click the 'Movies' link to see what the people are saying about your favourite films or start an account to give us your take!
            </p>

            <p>
                We'll see you at the movies 📽️
            </p>
        </div>
    )
}

export default Home;