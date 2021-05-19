export const getAllReviews = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/reviews')
        .then(resp => resp.json())
        .then(reviews => console.log(reviews))
    }

}
