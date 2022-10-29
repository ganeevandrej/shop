import {omit} from "lodash";
import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} from "../constans/actionType";
import {getLocalStorage} from "../../utils/LocalStorage";

const initialState = getLocalStorage('store');

const CartReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                ...action.payLoad
            }
        case REMOVE_PRODUCT_FROM_CART:
            return omit(state, [action.payLoad]);
        default:
            return state;
    }
}

export default CartReducer;