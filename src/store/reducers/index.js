import { combineReducers } from "redux";

import CartReducer from "./cartReducer";
import UserReducer from "./userReducer";

export default combineReducers({
    CartReducer,
    UserReducer
});