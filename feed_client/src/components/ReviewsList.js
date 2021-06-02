import React from 'react';
import {connect} from 'react-redux';
import {deleteReview} from '../actions/reviewsActions';
import ReviewsContainer from '../Containers/ReviewsContainer'

const ReviewsList = ({ reviews, deleteReview }) => {

        return (
            <div>
            <h1>All Reviews:</h1>
            {reviews.map(review => 
                <ul key={review.id}>
                    <li >
                        item name:{review.item_name} <br></br>
                        customer name:{review.customer_name} <br></br>
                        date: {review.date} <br></br>
                        content: {review.content} 
                        
                    </li>
                    <button onClick={() => deleteReview(review)}>Delete</button>
                </ul>
            
        )}
        <ReviewsContainer />
        </div>
        );

};

//LIST IS NOT DISPLAYING ON THE SCREEN OR WHEN YOU ADD A REVIEW - 5/30/21. Working now.

const mapStateToProps = state => {
    return {reviews: state.reviews}
}

export default connect(mapStateToProps, {deleteReview})(ReviewsList);
















//done
//not a stateless component

// abandoned code:

// return (
//     <div>
//     <h1>All Reviews:</h1>
//     {reviews.map(review => 
//         <ul key={review.id}>
//             <li >
//                 {review.customer_name} - {review.date} - {review.content} 
//             </li>
//             <button type="button" onClick={() => deleteReview(review.id)}>
//             Remove
//             </button>
//             <input type='delete' value="Delete Review" />
//         </ul>
// )}
// </div>
// );

// };

