export const servicesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SERVICES':
            return action.payload
        default:
            return state
    }
}