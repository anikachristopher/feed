//route 1
//Lists all the equipment and their description ONLY
import React from 'react';
import Logo from '../photos/Screen Shot 2021-06-01 at 11.02.59 PM.png'
import Logo2 from '../photos/Screen Shot 2021-06-01 at 11.07.32 PM.png'
import Logo3 from '../photos/Screen Shot 2021-06-01 at 11.08.41 PM.png'
// import ReviewsList from './ReviewsList'
// import { connect } from 'react-redux'

const Equipment= () => {
  return (
      <div className="w3-col-right r14 margin-top">
      <h3>All your ATM related Equipment needs in one place! Get a description of each one here.</h3>
        <div className="w3-card w3-margin w3-margin-top">
        <img src={Logo} alt="ATM" className="image"  width="200" height="300"></img>
            <div className="w3-container w3-white">
                <h4><b>ATM</b></h4>

                <p>Sizing: Available in 1K - 4K dispenser sizes. </p>
                <p>Availability: Drop Ship and pick up options.</p>
                <p>Transportation: Not mobile. Needs to be stationary.</p>
                <p>Purpose: Perfect for your corner store or small business.</p>
            </div>
    
        </div>
        <div className="w3-card w3-margin w3-margin-top">
        <img src={Logo2} alt="CCMAC" className="image"  width="200" height="300"></img>
          <div className="w3-container w3-white">
              <h4><b>Credit Card Machine</b></h4>

              <p>Sizing: Cordless and wired.</p>
              <p>Availability: Drop Ship and pick up options.</p>
              <p>Transportation: Lightweight and portable.</p>
              <p>Purpose: Perfect for your corner store or small business.</p>
          </div>
    
      </div>
      <div className="w3-card w3-margin w3-margin-top">
      <img src={Logo3} alt="POS" className="image"  width="200" height="300"></img>
            <div className="w3-container w3-white">
                <h4><b>POS Machine</b></h4>

                <p>Sizing: Large and small options available.</p>
                <p>Availability: Drop Ship and pick up options.</p>
                <p>Transportation: Lightweight and portable.</p>
                <p>Purpose: Perfect for your Enterprise or small business since it can be taken anywhere you go.</p>
            </div>
      
        </div>
      </div>
      
  )
  
};

export default Equipment;

// export default connect(null, { ReviewsList })(CustomerService);

//stateless

