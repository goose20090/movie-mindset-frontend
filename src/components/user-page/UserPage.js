import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { StyledUser } from "../../component-styles/User.style";
import { StyledUserReviewShow } from "../../component-styles/UserReviewShow.style";

function UserPage({className, children, users, currentUsersReviews, currentReview, setCurrentReview}){

    const match = useRouteMatch()
    return (
        <div className={className}>
            {children}
            <Route path = {`${match.url}/:userId`}>
                <StyledUser users = {users} currentUsersReviews= {currentUsersReviews} setCurrentReview = {setCurrentReview} currentReview = {currentReview}/>
                <StyledUserReviewShow currentReview = {currentReview}/>
            </Route>
        </div>
    )
}

export default UserPage;