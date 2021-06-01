export const reviewsReducer = (state = [], action) => {
    switch(action.type){
        case 'GET_ALL_REVIEWS':
            return action.payload
        case 'CREATE_REVIEW':
            return [...state, action.payload]
        case 'DELETE_REVIEW':
            return  state.filter(review => review.id !== action.payload )
        default:
            return state
    }
}