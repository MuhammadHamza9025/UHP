import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navbar: null,
    data: [],
};

const customreducer = createSlice({
    name: "customreducer",
    initialState,
    reducers: {
        Navbardata(state, action) {
            return { ...state, navbar: action.payload };  // Updates the navbar state
        }
    }
});

export default customreducer.reducer;
export const { Navbardata } = customreducer.actions;
