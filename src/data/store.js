import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import catFactSlice from "./catFactSlice";
import songSlice from "./songSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        songs: songSlice.reducer,
        catFact: catFactSlice.reducer
    }

})