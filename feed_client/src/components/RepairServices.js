//route 3

import React from 'react';


class RepairServices extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An entry was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div class="container">
      <div class="jumbotron"><h1>Repair Service</h1></div></div>
        
        <form onSubmit={this.handleSubmit}></form> 
        <label>Name:</label>
          <input type='text' value={this.state.customer_name} onChange={this.handleChange} name="customer_name"/>
          <br />
          <label>Email:</label>
          <input type='text' value={this.state.email} onChange={this.handleChange} name="email"/>
          <br />
          <label>Contact Number:</label>
          <input type='integer' value={this.state.contact_number} onChange={this.handleChange} name="contact_number"/>
          <br />
          <label>Comment:</label>
          <textarea value={this.state.content} onChange={this.handleChange} name="content"/>
          <br />
          <input type="button" value="Submit" id="btnsubmit"></input>
          
          <hr></hr>
        </form>
      );
}
}


export default RepairServices;

//this form does not submit - maybe should be that way but at least the form should clear after entry