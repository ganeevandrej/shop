import {legacy_createStore as createStore} from "redux";
import rootReducers from "./reducers";
import {setLocalStorage} from "../utils/LocalStorage";
import CartReducer from "./reducers/cartReducer";

const store = createStore(rootReducers);

store.subscribe(() => {
    setLocalStorage("store", store.getState().CartReducer);
})

export default store;
