export const getAllServices = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/services')
        .then(resp => resp.json())
        .then(reviews => dispatch({ type: 'FETCH_SERVICES', payload: services}))
    }

}

//no need for CRUD functionality. only using seed data
//this is done
