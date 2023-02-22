import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNote } from '../redux-Slices/slices/noteslice';

function CreateNote() {

    const [desc, setDesc]= useState("");
    const dispatch = useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        dispatch(createNote(
            {
                desc ,
                id: nanoid(10)
            }
    ))
    }



    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Create a Note' type="text"  onChange={(e)=> setDesc(e.target.value)}/>
            <button onClick={handleSubmit}>Create</button>
        </form>
    </div>
  )
}

export default CreateNote;