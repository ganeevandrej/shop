import {
    ADD_PRODUCT_TO_CART, ADD_USER,
    REMOVE_PRODUCT_FROM_CART, REMOVE_PRODUCTS_FROM_CART,
    REMOVE_USER, UPDATE_PRODUCT_CART } from "../constans/actionType";

export const addItemToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    };
}
export const setUser = obj => {
    return {
        type: ADD_USER,
        payload: obj
    };
}
export const removeUser = user => {
    return {
        type: REMOVE_USER,
        payload: user
    };
}
export const removeProductFromCart = id => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: id
    };
}
export const removeProductsFromCart = () => {
    return {
        type: REMOVE_PRODUCTS_FROM_CART,
        payload: null
    };
}
export const upDateProductCart = (id, action) => {
    return {
        type: UPDATE_PRODUCT_CART,
        payload: {
            id,
            operator: action
        }
    };
}
