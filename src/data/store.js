import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import songSlice from "./songSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        songs: songSlice.reducer
    }

})