//create a form for persons to create a review
//mount in the review container
//add a button to connect the review form to the service and open a review modal

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { createReview} from '../actions/reviewsActions'

class ReviewsForm extends Component {


  state = {
        customer_name: '', 
        content: '',
        date: ''
    }

    handleChange = e => {
      const { name, value } = e.target
      this.setState({
          [name]: value
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createReview(this.state)
}
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type='text' value={this.state.customer_name} onChange={this.handleChange} name="customer_name"/>
            <br />
            <label>Date:</label>
            <input type='text' value={this.state.date} onChange={this.handleChange} name="date"/>
            <br />
            <label>Content:</label>
            <input type='text' value={this.state.content} onChange={this.handleChange} name="content"/>
            <br />
            <input type='submit' value="Create Review" />
          </form>
        );
  }
}

export default connect(null, { createReview }) (ReviewsForm);


