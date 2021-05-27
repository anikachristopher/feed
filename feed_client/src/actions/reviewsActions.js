export const getAllReviews = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/reviews')
        .then(resp => resp.json())
        .then(reviews => dispatch({ type: 'FETCH_REVIEWS', payload: reviews}))
    }

}


//build CRUD functionality here - create and delete (maybe update)

export const createReview = (review) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/reviews', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(review => dispatch({ type: 'CREATE_REVIEW', payload: review}))
    }
}