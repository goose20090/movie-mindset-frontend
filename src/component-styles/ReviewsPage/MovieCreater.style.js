import styled from "styled-components";
import MovieCreater from "../../components/ReviewsPage/MovieCreater";

export const StyledMovieCreater = styled(MovieCreater)`


h2{
    margin-left: 2.5%;
    text-align: center;
}

#form-copy{
    text-align: left;
}
form{
    margin-left: 5%;
    input{
        margin-left: 2.5%;
        width: 200px;
    }

}

    .options{
        display: flex;
        justify-content: space-evenly;
        /* margin-top: 2.5%;
        margin-left: 20%;
        gap: 10% */
    }

    #final-options{

    }
`