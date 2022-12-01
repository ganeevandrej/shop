import {legacy_createStore as createStore} from "redux";
import rootReducers from "./reducers";
import {setLocalStorage} from "../utils/LocalStorage";

const store = createStore(rootReducers);

store.subscribe(() => {
    setLocalStorage("store", store.getState().CartReducer);
    setLocalStorage("token", store.getState().UserReducer);
})

export default store;
