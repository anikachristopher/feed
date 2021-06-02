//create a form for persons to create a review
//mount in the review container
//add a button to connect the review form to the service and open a review modal

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { createReview} from '../actions/reviewsActions'

class ReviewsForm extends Component {


  state = {
        item_name: '',
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

          
          <label>Item name:</label>
          <input type='text' value={this.state.item_name} onChange={this.handleChange} autocomplete = "off" name="item_name"/>
          <br />
            <label>Customer Name:</label>
            <input type='text' value={this.state.customer_name} onChange={this.handleChange} autocomplete = "off" name="customer_name"/>
            <br />
            <label>Date:</label>
            <input type='text' value={this.state.date} onChange={this.handleChange} autocomplete = "off" name="date"/>
            <br />
            <label>Content:</label>
            <textarea value={this.state.content} onChange={this.handleChange} autocomplete = "off" name="content"/>
            <br />
            <input type='submit' value="Create Review" />
          </form>
        );

  }
}

export default connect(null, { createReview }) (ReviewsForm);

//working
//logic changed to leaving a review on each page (route). Each route represents a service.
//not a stateless component
