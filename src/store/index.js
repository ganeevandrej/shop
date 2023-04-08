import { legacy_createStore as createStore } from "redux";
import rootReducers from "./reducers";
import { setLocalStorage } from "../utils/LocalStorage";

export const store = createStore(rootReducers);

store.subscribe(() => {
    setLocalStorage("index", store.getState().CartReducer);
    setLocalStorage("user", store.getState().UserReducer);
})
