import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getAllReviews } from '../actions/reviewsActions'
//create form and mount it here
class ReviewsContainer extends Component {

    componentDidMount(){
        this.props.getAllReviews()
    }

    render() {
        return (
            <div>
                MALIK IS DOING A CROSSWORD PUZZLE IN SHORTS!
            </div>
        );
    }
}

export default connect(null, { getAllReviews })(ReviewsContainer);
