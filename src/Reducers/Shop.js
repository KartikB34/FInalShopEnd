import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const shopReducer = createReducer(initialState, {

    //Add Shop
    addShopRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    addShopSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    addShopFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    //Get all my shops
    GetMyShopsRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    GetMyShopsSuccess: (state, action) => {
        state.loading = false;
        state.shops = action.payload;
    },
    GetMyShopsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearErrors: (state) =>{
        state.error = null
    }
})
