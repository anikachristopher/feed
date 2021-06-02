//route 3
//Lists all repair costs and timeframe. Options for repair. Warantee etc.

import React from 'react';
import Logo from '../photos/Screen Shot 2021-06-01 at 11.02.59 PM.png'
import Logo2 from '../photos/Screen Shot 2021-06-01 at 11.07.32 PM.png'
import Logo3 from '../photos/Screen Shot 2021-06-01 at 11.08.41 PM.png'
// import ReviewsList from './ReviewsList'
// import { connect } from 'react-redux'

const Repairs= () => {
  return (
      <div className="w3-col-right r14 margin-top">
      <h3>All your ATM related repair needs and locations! Affordable and best in class repair service.</h3>
        <div className="w3-card w3-margin w3-margin-top">
        <img src={Logo} alt="ATM" className="image"  width="200" height="300"></img>
            <div className="w3-container w3-white">
                <h4><b>ATM Repair</b></h4>

                <p>Repair Cost - $300</p>
                <p>Locations: NY, CA, MI, TX </p>
                <p>Turnaround Time: 2-4 Hours </p>
            </div>
    
        </div>
        <div className="w3-card w3-margin w3-margin-top">
        <img src={Logo2} alt="CCMAC" className="image"  width="200" height="300"></img>
          <div className="w3-container w3-white">
              <h4><b>CC Machine Repair</b></h4>

              <p>RepairCost - $100</p>
              <p>Locations: NY, CA, MI, TX </p>
              <p>Turnaround Time: 1-2 Hours </p>
          </div>
    
      </div>
      <div className="w3-card w3-margin w3-margin-top">
      <img src={Logo3} alt="POS" className="image"  width="200" height="300"></img>
            <div className="w3-container w3-white">
                <h4><b>POS Repair</b></h4>

                <p>Repair Cost - $50</p>
                <p>Locations: NY, CA, MI, TX </p>
                <p>Turnaround Time: 2-3 Hours </p>
            </div>
      
        </div>
      </div>
      
  )
  
};

export default Repairs;
