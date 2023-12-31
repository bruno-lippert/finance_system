import { UserActionTypes } from "./action-types";

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case UserActionTypes.LOGIN:
            return { ...state, currentUser: action.payload}
            break;
        
        case UserActionTypes.LOGOUT:
            return { ...state, currentUser: null}

        default:
            return state;
    }
};

export default userReducer;