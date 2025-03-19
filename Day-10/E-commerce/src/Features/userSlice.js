import { createSlice } from "@reduxjs/toolkit";

const initial = {
    name:"",
    email:"",
    password:""
}

const initialState = {
    users : localStorage.getItem("users") || [],
    errors : initial,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        handleError:(state,action) => {
            state.errors = action.payload               
        },
        /**
         * @description  Logs in the user by updating the state with user details.
         * @param {*} state 
         * @param {*} action 
         */
        logInUser: (state,action) => {
            try {
                
            } catch (error) {
                console.log("LOGIN USER ERROR : ",error);
            }
        },
        /**
         * @description Registers a new user by updating the state with user details.
         * @param {*} state 
         * @param {*} action 
         */
        registerUser : (state,action) => {
            try {
                
            } catch (error) {
                console.log("REGISTER USER ERROR : ",error);
            }
        }
    }
})

export const {logInUser,registerUser,handleError} = userSlice.actions;

export default userSlice.reducer;