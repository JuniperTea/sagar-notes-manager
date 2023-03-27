import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//for async returns.
export const getFact = createAsyncThunk('getFact', ()=>{
    //must return the data.

    return fetch('https://catfact.ninja/fact')
        .then(x => x.json())

})

// export const getRandomUser = createAsyncThunk('getRandomUser', ()=>{
//     //must return the data.

//     return fetch('https://catfact.ninja/fact')
//         .then(x => x.json())

// })


const catFactSlice = createSlice({
    name: 'catFact',
    initialState: {
        fact: 'placeholder for cats',
        loadingFact: false
    },
    extraReducers: (builder) => {
        //what should happen when api gets the data.
        builder.addCase(getFact.fulfilled, (state, action) => {
            //action.payload is the response from the api.
            state.fact = action.payload.fact;
            state.loadingFact = false;
        })

        //when the api is still getting the data
        builder.addCase(getFact.pending, (state,action) => {
            state.loadingFact = true;
        })
        //
        // builder.addCase(getRandomUser.fulfilled, (state, action) => {
        //     //action.payload is the response from the api.
        //     state.fact = action.payload.fact;
        // })

    }


});




export default catFactSlice;