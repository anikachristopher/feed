//route 1
import React from 'react';
// import ReviewsList from './ReviewsList'
// import { connect } from 'react-redux'

class CustomerService extends React.Component {
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
        <div class="jumbotron"><h1>Customer Service</h1></div></div>
          <h4>We pride ourselves on the best in class customer service. </h4><br></br>
          <h4>If you have any questions please fill out this form and we will get back to you</h4>.<br></br>
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


//form doesn't submit to anywhere but it should also be a dummy form. Either way I need to clear the fields.




// const CustomerService= () => {
//         return (
//             <div>
//                Welcome. If you have any questions please feel free to reach out to us by phone or fill out this form and we will get back to you.
//                <form>
               
//                </form>
//                 <hr />
//             </div>
            
//         );

// };

export default CustomerService;

// export default connect(null, { ReviewsList })(CustomerService);

