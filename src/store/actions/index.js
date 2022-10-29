import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} from "../constans/actionType";

export const setProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payLoad: product
    };
}

export const removeProductFromCart = id => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payLoad: id
    };
}