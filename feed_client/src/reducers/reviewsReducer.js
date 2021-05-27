export const reviewsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_REVIEWS':
            return action.payload
        case 'CREATE_REVIEW':
            return [...state, action.payload]
        default:
            return state
    }
}