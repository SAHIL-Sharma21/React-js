// //making authentication slice in this file
// import { createSlice } from "@reduxjs/toolkit";


// //making initial state fot the state 
// const initialState = {
//     status: false,
//     userData: null
// };

// //creating slice
// const authSlice = createSlice({ //3 parameter in createSlice (name, initialState, and reducers)
//     name: "auth",
//     initialState,
//     reducers: {
//         //1st state login
//         login: (state, action) => {
//             //if user login then status true krdenge
//             state.status = true;
//             state.userData = action.payload.userData; //taking userData from the user input
//         },

//         //2nd state logout
//         logout: (state) => {
//             //if user is logging out state and user data null kr dena hai
//             state.status = false;
//             state.userData = null;
//         }
//     }
// });

// //exporting reducer functionality from authSlice.actions authSlice ke ander reducer ke under ke functions to actions bhi bolte hai..
// export const { login, logout } = authSlice.actions

// //exporting default reducer
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;