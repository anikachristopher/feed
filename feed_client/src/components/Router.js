import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from '../components/Homepage'
import Pricing from '../components/Pricing'
import About from '../components/About'
import ReviewsList from '../components/ReviewsList'



const Router = () => {
        return (
            <Switch>
                <Route path='/homepage' component={Homepage} />
                <Route path='/pricing' component={Pricing} />
                <Route path='/about' component={About} />
                <Route path='/Reviews' component={ReviewsList} />
            </Switch>
        );

};

export default Router;


//change reviews path to the services path when you finish build it out
//figure out why exact path wasn't working
//create a services router