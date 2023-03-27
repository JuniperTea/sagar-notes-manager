import { createSlice } from "@reduxjs/toolkit";

 const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songs: [{songName: 'perfect', rating: 5}]
    },
    reducers: {
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

export const { addSong } = songSlice.actions;

export default songSlice;

