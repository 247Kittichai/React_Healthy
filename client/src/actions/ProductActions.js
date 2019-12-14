import Axios from 'axios'
import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from './types'

// Create method

// Actions Add Product
// ดึงสินค้ามาชิ้นเดียว เพื่อแก้ไข
export const productFatch = id => {
    return dispatch => {
        Axios.get(process.env.REACT_APP_API_URL + "/products/" + id).then(
            res => {
                dispatch({ type: PRODUCT_FETCH, payload: res.data });
            }
        );
    }   
}


// Called to send Action to the Reducer.
export const productsFatch = () => {
    return dispatch => {
        Axios.get(process.env.REACT_APP_API_URL + "/products").then(
            res => {
                dispatch({ type: PRODUCTS_FETCH, payload: res.data });
            }
        );
    }
}

// Call to send Action to delete.
export const productDelete = id => {
    return dispatch => {
        Axios.delete(process.env.REACT_APP_API_URL + "/products/" + id).then(res => {
            // When finished deleting
            // Retrieve latest information from the server to show
            Axios.get(process.env.REACT_APP_API_URL + "/products").then(
                res => {
                    // Send to change information in store 
                    dispatch({ type: PRODUCTS_FETCH, payload: res.data });
                }
            );
        })
    }
}

// สร้างสินค้าเพิ่ม ส่งข้อมูลเข้ามาเป็น json
export const productCreate = values => {
    return dispatch => {
        Axios.post(process.env.REACT_APP_API_URL + "/products", values).then(
            res => {
                dispatch({type: PRODUCT_CREATE});
            }
        )
    }
}

// สินค้ามีการ Update
export const productUpdate = (id, values) => {
    return dispatch => {
        Axios.put(process.env.REACT_APP_API_URL + "/products/" + id, values).then(
            res => {
                dispatch({type: PRODUCT_UPDATE});
            }
        )
    }
}