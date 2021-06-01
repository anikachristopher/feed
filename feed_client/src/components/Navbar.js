
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact>
        Homepage
      </NavLink>
      <NavLink to="/customerservice" exact>
        Customer Service
      </NavLink>
      <NavLink to="/repairservices" exact>
       Repairs
      </NavLink>
      <NavLink to="/installationservices" exact>
        Equipment Installation
      </NavLink>
    </div>
  );
  
};



export default NavBar;

// <div class="container">
//             <nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3;width:250px" id="mySidebar">
//                   <div class="w3-container w3-display-container w3-padding-16">
//                     <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
//                     <h3 class="w3-wide"><b>FEED</b></h3>
//                   </div>
//                   <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">
//                     <a href="#" class="w3-bar-item w3-button">HOMEPAGE</a>
//                     <a href="#" class="w3-bar-item w3-button">CUSTOMER SERVICE</a>
//                     <a href="#" class="w3-bar-item w3-button">INSTALLATIONS</a>
//                     <a href="#" class="w3-bar-item w3-button">REPAIRS</a>
//                     <a href="#" class="w3-bar-item w3-button">REVIEWS</a>
//                     <a href="#" class="w3-bar-item w3-button">Contact Us</a>
//                     <a onclick="" href="javascript:void(0)" class="w3-button w3-block w3-white w3-center-align" id="myBtn">
//             </nav>
//         </div>

//navbar is up but not connected to the routes



// function Navbar() {

//     const [click, setClick] = useState(false);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if (window.innerWidth <= 960) {
//           setButton(false);
//         } else {
//           setButton(true);
//         }
//     };
    
//     useEffect(() => {
//         showButton();
//       }, []);
    
//       window.addEventListener('resize', showButton);

//     return (
//         <nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3;width:250px" id="mySidebar">
//         <div class="w3-container w3-display-container w3-padding-16">
//           <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
//           <h3 class="w3-wide"><b>FEED</b></h3>
//         </div>
//         <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">
//           <a href="#" class="w3-bar-item w3-button">HOMEPAGE</a>
//           <a href="#" class="w3-bar-item w3-button">CUSTOMER SERVICE</a>
//           <a href="#" class="w3-bar-item w3-button">INSTALLATIONS</a>
//           <a href="#" class="w3-bar-item w3-button">REPAIRS</a>
//           <a href="#" class="w3-bar-item w3-button">REVIEWS</a>
//           <a href="#" class="w3-bar-item w3-button">Contact Us</a>
//           <a onclick="" href="javascript:void(0)" class="w3-button w3-block w3-white w3-center-align" id="myBtn">
//         </nav>

        
//     )
// }

// export default Navbar