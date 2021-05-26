import callApi from '../../ApiData'

export const productsRequest = () => {
    return async (dispatch) => {
        const res = await callApi('/products', 'GET', null);
        dispatch(GetAllProduct(res.data));
    }
}


export function AddCart(payload){
    return {
        type:'ADD_CART',
        payload
    }
}
export function GetAllProduct(payload){
    return{
        type:'GET_ALL_PRODUCT',
        payload
    }
}

export function GetNumberCart(){
    return{
        type:'GET_NUMBER_CART'
    }
}

export function UpdateCart(payload){
    return {
        type:'UPDATE_CART',
        payload
    }
}
export function DeleteCart(payload){
    return{
        type:'DELETE_CART',
        payload
    }
}
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART' ;
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';