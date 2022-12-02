import {
    ADD_PRODUCT_TO_CART, ADD_USER,
    REMOVE_PRODUCT_FROM_CART, REMOVE_PRODUCTS_FROM_CART, REMOVE_USER,
    UPDATE_PRODUCT_CART
} from "../constans/actionType";

export const setProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payLoad: product
    };
}

export const setUser = obj => {
    return {
        type: ADD_USER,
        payLoad: obj
    };
}

export const removeUser = user => {
    return {
        type: REMOVE_USER,
        payLoad: user
    };
}

export const removeProductFromCart = id => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payLoad: id
    };
}

export const removeProductsFromCart = () => {
    return {
        type: REMOVE_PRODUCTS_FROM_CART,
        payLoad: null
    };
}

export const upDateProductCart = data => {
    return {
        type: UPDATE_PRODUCT_CART,
        payLoad: data
    };
}