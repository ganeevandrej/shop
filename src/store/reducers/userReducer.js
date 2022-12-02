import {getLocalStorage} from "../../utils/LocalStorage";
import {ADD_USER, REMOVE_USER} from "../constans/actionType";
import {omit} from "lodash";

const initialState = getLocalStorage('user');

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                user: action.payLoad
            }
        case REMOVE_USER:
            return omit(state, [action.payLoad]);
        default:
            return state;
    }
}

export default UserReducer;