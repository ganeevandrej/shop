import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART,
    REMOVE_PRODUCTS_FROM_CART, UPDATE_PRODUCT_CART } from "../constans/actionType";

const initialState = {
    productCart: [],
}

const CartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                productCart: [...state.productCart, payload]
            }
        case REMOVE_PRODUCT_FROM_CART:
            const indexItem = state.productCart.findIndex((item) => item.id === payload);
            return {
                ...state,
                productCart: [
                    ...state.productCart.slice(0, indexItem),
                    ...state.productCart.slice(indexItem + 1)
                ]
            };
        case REMOVE_PRODUCTS_FROM_CART:
            return {
                productCart: []
            }

        case UPDATE_PRODUCT_CART:
            const itemIndex = state.productCart.findIndex((item) => item.id === payload.id);
            const item = state.productCart.find((item) => item.id === payload.id);

            const newItem = {
                ...item,
                count: item.count + payload.operator
            }

            return {
                productCart: [
                    ...state.productCart.slice(0, itemIndex),
                    newItem,
                    ...state.productCart.slice(itemIndex + 1)
                ]
            }
        default:
            return state;
    }
}

export default CartReducer;