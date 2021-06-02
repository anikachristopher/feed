
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact>
        Homepage
      </NavLink>
      <NavLink to="/equipment" exact>
        Equipment
      </NavLink>
      <NavLink to="/repair" exact>
       Repair
      </NavLink>
      <NavLink to="/installation" exact>
        Installation
      </NavLink>
      <NavLink to="/contact" exact>
        Contact Us
      </NavLink>
    </div>
  );
  
};



export default NavBar;


