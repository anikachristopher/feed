import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getAllReviews } from '../actions/reviewsActions'
import ReviewsForm from './ReviewsForm'


//create form and mount it here
class ReviewsContainer extends Component {

    componentDidMount(){
        this.props.getAllReviews()
    }

    render() {
        return (
            <div>
                Create a Review
                <ReviewsForm />
            </div>
        );
    }
}

export default connect(null, { getAllReviews })(ReviewsContainer);

//working