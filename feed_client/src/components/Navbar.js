
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

//navbar is up but not connected to the routes