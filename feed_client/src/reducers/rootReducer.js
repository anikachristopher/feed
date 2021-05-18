import { combineReducers } from 'redux'
import { servicesReducer } from './servicesReducer'
import { reviewsReducer } from './reviewsReducer';



export const rootReducer = combineReducers({
    services: servicesReducer,
    reviews: reviewsReducer
});