import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Home({className}){

    // Set the document title
    useDocumentTitle('MovieMindset')

    return(
        <div className={className} id = "home">

            <p>
                Welcome to MovieMindset! A review site for movie-loving robots around the world.
                <br/><br/>
                Go to Movies see what the people are saying about your favourite films or start an account to give us your take!
                <br/><br/>
                Get involved- we'll see you at the movies 📽️
            </p>
        </div>
    )
}

export default Home;