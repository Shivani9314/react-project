import {createSlice} from '@reduxjs/toolkit';


const loginSlice = createSlice({
    name : "loginSlice",
    initialState : {
        users : []
    },

    reducers : {
        createUser : (state,action) =>{
            state.users.push(action.payload)
        },
    }
}

)

export default loginSlice.reducer;

export const {createUser} = loginSlice.actions;
