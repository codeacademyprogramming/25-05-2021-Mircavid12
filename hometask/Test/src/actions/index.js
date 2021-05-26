import api from '../ApiData'
export const ADD_CART = 'ADD_CART' ;
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const DELETE_CART = 'DELETE_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return api('/products', 'GET', null).then(res => {
          
            dispatch(GetAllProduct(res.data));
        });
    }
}

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload){
    return{
        type:'GET_ALL_PRODUCT',
        payload
    }
}

/*GET NUMBER CART*/
export function GetNumberCart(){
    return{
        type:'GET_NUMBER_CART'
    }
}

export function AddCart(payload){
    return {
        type:'ADD_CART',
        payload
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


