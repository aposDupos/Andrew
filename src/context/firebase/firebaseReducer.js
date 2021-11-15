import {BUY_WISH, CHANGE_BALANCE, GET_MONEY, SHOW_LOADER} from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [GET_MONEY]: (state, {payload}) => ({...state, balance: payload, loading: false}),
    [BUY_WISH]: (state, {payload}) => ({...state, wishes: [...state.wishes, payload]}),
    [CHANGE_BALANCE]: (state, {payload}) => ({...state, balance: state.balance + payload}),
    DEFAULT: state => state
}
export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}