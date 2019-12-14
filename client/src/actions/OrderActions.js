import Axios from 'axios'
import { ORDERS_FETCH } from './types'

// Create method

// Called to send Action to the Reducer.
export const ordersFatch = () => {

    return dispatch => {
        Axios.get(process.env.REACT_APP_API_URL + "/orders").then(
            res => {
                dispatch({ type: ORDERS_FETCH, payload: res.data });
            }
        );
    }
}

// Call to send Action to delete.
export const orderDelete = id => {
    return dispatch => {
        Axios.delete(process.env.REACT_APP_API_URL + "/orders/" + id).then(res => {
            // When finished deleting
            // Retrieve latest information from the server to show
            Axios.get(process.env.REACT_APP_API_URL + "/orders").then(
                res => {
                    // Send to change information in store 
                    dispatch({ type: ORDERS_FETCH, payload: res.data });
                }
            );
        })
    }
}