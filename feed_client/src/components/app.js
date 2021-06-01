import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import ReviewsList from './ReviewsList'
import ReviewsContainer from './ReviewsContainer'
// import Navbar from './Navbar';
// import ReviewsForm from './ReviewsForm'

import Homepage from './Homepage'
import CustomerService from './CustomerService'
import InstallationServices from './InstallationServices'
import RepairServices from './RepairServices'





// const FirstRouter = () => {
//         return ()}


const App = () => {
    return (
        <Router>
        <div className="App">
      
        <div className="content">
        <Switch>
       
        <Route exact path='/' component={Homepage} />
        <Route path='/customer' component={CustomerService} />
        <Route path='/installation' component={InstallationServices} />
        <Route path='/repair' component={RepairServices} />
        <Route path='/Reviews' component={ReviewsList} />
    </Switch>
            <ReviewsContainer />
         </div>
        </div>
        </Router>
    );
};

export default App;

//include a nav bar here - CS, Repairs, Installations
//double check whether those are the pages i want returned on the app level. May not want the reviews showing on pg 1
