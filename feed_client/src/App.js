import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import ReviewsList from './components/ReviewsList'
// import ReviewsContainer from './Containers/ReviewsContainer'
// import Navbar from './Navbar';
// import ReviewsForm from './ReviewsForm'

import Homepage from './components/Homepage'
import Equipment from './components/Equipment'
import Installation from './components/Installation'
import Repair from './components/Repair'
import Contact from './components/Contact'



const App = () => {
    return (
        <Router>
        <div className="App">
      
        <div className="content">
        <Switch>       
        <Route exact path='/' component={Homepage} />
        <Route path='/equipment' component={Equipment} />
        <Route path='/installation' component={Installation} />
        <Route path='/repair' component={Repair} />
        <Route path='/Reviews' component={ReviewsList} />
        <Route path='/Contact' component={Contact} />
    </Switch>
           
         </div>
        </div>
        </Router>
    );
};

export default App;

//include a nav bar here - CS, Repairs, Installations
//double check whether those are the pages i want returned on the app level. May not want the reviews showing on pg 1
