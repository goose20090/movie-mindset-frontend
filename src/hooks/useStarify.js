function useStarify(rating){

    let starRating = ''
    for (let i = 0; i < rating; i ++){
        starRating = starRating + '⭐'
    }
    return(
        starRating
    )
}

export default useStarify;