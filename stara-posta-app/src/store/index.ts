import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "../components/auth/login/AuthReducer.ts";

export const rootReducer = combineReducers({
    auth: AuthReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
});