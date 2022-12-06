function useCommentify(rating){
    let ratingComment;

    switch (rating){
        case 5:
            ratingComment = "Masterpiece"
            break;
        case 4:
            ratingComment= "Very Good"
            break;
        case 3:
            ratingComment = "Ok"
            break;
        case 2:
            ratingComment = "Poor"
            break;
        case 1:
            ratingComment = "Terrible"
            break;
        default:
            ratingComment = ""
            break;
    }


    return(
        ratingComment
    )
}

export default useCommentify;