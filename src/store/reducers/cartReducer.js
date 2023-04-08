import { omit } from "lodash";
import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    REMOVE_PRODUCTS_FROM_CART,
    UPDATE_PRODUCT_CART
} from "../constans/actionType";
import { getLocalStorage } from "../../utils/LocalStorage";

const initialState = getLocalStorage('store');

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                ...action.payLoad
            }
        case REMOVE_PRODUCT_FROM_CART:
            return omit(state, [action.payLoad]);
        case REMOVE_PRODUCTS_FROM_CART:
            return {}

        case UPDATE_PRODUCT_CART:
            const stateNew = {...state};
            if (action.payLoad.id in stateNew) {
                stateNew[action.payLoad.id].count = action.payLoad.count;
            }
            return stateNew;
        default:
            return state;
    }
}

export default CartReducer;