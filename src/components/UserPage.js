import React, {useState} from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { StyledUserList } from "../component-styles/UserList.style";
import { StyledUser } from "../component-styles/User.style";
import RenderWrapper from "./RenderWrapper";
import { StyledUserReviewShow } from "../component-styles/UserReviewShow.style";

function UserPage({className, children, isLoading, users}){
    const match = useRouteMatch()
    const [review, setReview] = useState({})
    return(
        <div className={className}>
            {children}
            <StyledUserList>
                {isLoading? <h1>Loading...</h1> : <RenderWrapper data = {users} setShowState= {setReview} url = "users" makeNavLinksBy= "name"/>}
            </StyledUserList>
            <Route path = {`${match.url}/:userId`}>
                {/* <StyledUser users = {users} setReview = {setReview}/> */}
                <StyledUserReviewShow review={review} users = {users}/>
            </Route>
        </div>
    )
}

export default UserPage;