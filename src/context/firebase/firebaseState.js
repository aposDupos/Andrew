import React, {useReducer} from "react";
import {firebaseReducer} from "./firebaseReducer";
import {FirebaseContext} from "./firebaseContext";
import axios from "axios"
import {BUY_WISH, CHANGE_BALANCE, GET_MONEY, SHOW_LOADER} from "../types";

const url = process.env.REACT_APP_DB_URL
export const FirebaseState = ({children}) => {
    const initialState = {
        balance: '',
        wishes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)
    const showLoader = () => dispatch({type: SHOW_LOADER})
    const getMoney = async () => {
        showLoader()
        const result = await axios.get(`${url}/balance.json`)
        const payload = result.data
        dispatch({type: GET_MONEY, payload})
    }
    const changeBalance = money => {
        axios.put(`${url}/balance.json`, state.balance + money)
        dispatch({type: CHANGE_BALANCE, payload: money})
    }
    const buyWish = async title => {
        axios.post(`${url}/wishes.json`, {title})
        dispatch({type: BUY_WISH, payload: title})
    }


    return (
        <FirebaseContext.Provider value={{
            showLoader,
            buyWish,
            changeBalance,
            getMoney,
            balance: state.balance,
            loading: state.loading
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}