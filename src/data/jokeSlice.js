import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//for async returns.
export const getJoke = createAsyncThunk('getJoke', ()=>{
    //must return the data.

    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then(x => x.json())

})

const jokeSlice = createSlice({
    name: 'joke',
    initialState: {
        setup: 'placeholder for joke',
        punchLine: 'placeholder for punchline',
        loadingJoke: false
    },
    extraReducers: (builder) => {
        //what should happen when api gets the data.
        builder.addCase(getJoke.fulfilled, (state, action) => {
            //action.payload is the response from the api.
            state.setup = action.payload.setup;
            state.punchLine = action.payload.punchline;
            state.loadingJoke = false;
        })

        //when the api is still getting the data
        builder.addCase(getJoke.pending, (state,action) => {
            state.loadingJoke = true;
        })

    }


});




export default jokeSlice;