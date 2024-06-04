import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//one reducer for the whole app and it can contain multiple small reducer
const appStore = configureStore({
    reducer : {
        cart : cartReducer
    } 
});

export default appStore;