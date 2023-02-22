import {createSlice} from '@reduxjs/toolkit';


const noteslice = createSlice({
    name : 'noteslice',
    initialState :{
        notes : []
    },

    reducers: {
        createNote :(state ,action) =>{

           state.notes.push(action.payload);

        },

        updateNote :(state,action) =>{

            const user = state.notes.find((user)=> user.id === action.payload.id)
            user.desc = action.payload.desc;

        },

         deleteNote :(state,action)=>{

            state.notes = state.notes.filter((note)=> note.id !== action.payload)

        }


    }

})

export default noteslice.reducer;

export const {createNote , deleteNote} = noteslice.actions;