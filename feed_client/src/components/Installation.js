//route 2
//Lists all the installation costs. Training and where it can be used.
//Links to the sites where they can purchase the equipment

import React from 'react';
import Logo from '../photos/Screen Shot 2021-06-01 at 11.02.59 PM.png'
import Logo2 from '../photos/Screen Shot 2021-06-01 at 11.07.32 PM.png'
import Logo3 from '../photos/Screen Shot 2021-06-01 at 11.08.41 PM.png'
// import ReviewsList from './ReviewsList'
// import { connect } from 'react-redux'

const Installations= () => {
  return (
      <div className="w3-col-right r14 margin-top">
      <h3>All your ATM related equipment installation and setup costs! Purchase a system below.</h3>
        <div className="w3-card w3-margin w3-margin-top">
        <img src={Logo} alt="ATM" className="image"  width="200" height="300"></img>
            <div className="w3-container w3-white">
                <h4><b>Package 1-ATM</b></h4>

                <p>Average Cost - $1500</p>
                <a href="https://atmsamerica.com/products/hyosung-halo-ii-atm/" target="blank">ATM OF AMERICA</a>
            </div>
    
        </div>
        <div className="w3-card w3-margin w3-margin-top">
        <img src={Logo2} alt="CCMAC" className="image"  width="200" height="300"></img>
          <div className="w3-container w3-white">
              <h4><b>Package 2 - CC Machine</b></h4>

              <p>Average Cost - $500</p>
              <a href="https://nationalbankcard.com/equipment/wireless-terminals/ingenico-iwl255//" target="blank">INGENICO</a>
          </div>
    
      </div>
      <div className="w3-card w3-margin w3-margin-top">
      <img src={Logo3} alt="POS" className="image"  width="200" height="300"></img>
            <div className="w3-container w3-white">
                <h4><b>Package 3 - POS</b></h4>

                <p>Average Cost - $250</p>
                <a href="https://www.clover.com/shop/product/clover-station/with-display-printer?utm_source=google&utm_medium=ppc&utm_campaign=Clover_PPC_450Offer&utm_placement=120160662383&utm_term=&utm_content=517747207349&utm_adplacement=&utm_match=&utm_device=c&utm_location=9004339&utm_target=pla-1184648337722&program=khL4pD&gclid=CjwKCAjwtdeFBhBAEiwAKOIy5_IpvCrreQQ05JCZUiJZseb0jsY1RhYy_-tgQ3cm5SfqdeVo5UasNhoCD14QAvD_BwE" target="blank">CLOVER</a>
            </div>
      
        </div>
      </div>
      
  )
  
};

export default Installations;
