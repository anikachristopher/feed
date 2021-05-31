import React from 'react';

import Router from './Router'
import ReviewsContainer from './ReviewsContainer'

const App = () => {
    return (
        <div>
           <ReviewsContainer />
           <Router />
        </div>
    );
};

export default App;