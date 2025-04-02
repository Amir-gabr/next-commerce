import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const store = configureStore({
    reducer: {
        products: productsReducer
    }
})