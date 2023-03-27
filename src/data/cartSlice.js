import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartCount: 3,
        totalProducts: 10,
        songs: [{songName: 'perfect', rating: 5}]
    },
    reducers: {
        incrementCart: (state, action) => {
            state.cartCount = state.cartCount + 1;

        }, 
        changeTotal: (state, action) => {
            state.totalProducts = action.payload;
        },
        addSong: (state, action)=> {
            const newSong = action.payload;
            state.songs = [...state.songs, newSong];  //manipulates the original array.
            //why do we not use push?
            //state.songs.push(action.payload); 
            //you can, but push does not change the original array.
            //has to do with ref types vs value types and memory references.
            
        }
    }
})

export const { incrementCart, changeTotal, addSong } = cartSlice.actions;

export default cartSlice;
