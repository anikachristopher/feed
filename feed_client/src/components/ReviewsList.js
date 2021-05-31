import React from 'react';
import {connect} from 'react-redux'

const ReviewsList = ({ reviews }) => {
        return (
            <div>
            <h1>All Reviews:</h1>
            {reviews.map(review => 
                <ul key={review.id}>
                    <li >
                        {review.customer_name} - {review.date} - {review.content}
                    </li>
                </ul>
        )}
        </div>
        );

};

//LIST IS NOT DISPLAYING ON THE SCREEN OR WHEN YOU ADD A REVIEW - 5/30/21

const mapStateToProps = state => {
    return {reviews: state.reviews}
}

export default connect(mapStateToProps)(ReviewsList);
