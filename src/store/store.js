import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from "./productSlice";
// just as above first create a reducer like this and then add to the store.js file.

const store = configureStore({
    reducer : {
        cart : cartReducer,
        product : productReducer

        // you can add all reducers here just like cartReducer create more reducers.
    }
})

export default store;