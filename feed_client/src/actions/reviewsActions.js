export const getAllReviews = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/reviews')
        .then((resp) => {
            return resp.json();
        })
        .then((reviews) => {
            // toDispatch(dispatch, reviews);
            // console.log(reviews);
        dispatch({ type: 'GET_ALL_REVIEWS', payload: reviews});
        }
        )}
}
    
// function toDispatch(dispatch, daReviews){
//     dispatch({ type: 'GET_ALL_REVIEWS', payload: daReviews});
// }


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

export const deleteReview = review => {
    return dispatch => {
        dispatch({type: 'DELETE_REVIEW', payload: review.id})
        fetch(`http://localhost:3000/reviews/${review.id}`, {
            method: 'DELETE',
            body: JSON.stringify(review),
            headers: { 'Content-Type': 'application/json'}
        })
        
    }
}