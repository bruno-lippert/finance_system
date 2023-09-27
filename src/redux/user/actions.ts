import { UserLogin } from "../../types/Login";
import { UserActionTypes } from "./action-types";



export const loginUser = (payload: string) => ({
    type: UserActionTypes.LOGIN,
    payload,
})