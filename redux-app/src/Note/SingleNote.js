import React, { useRef } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { deleteNote } from '../redux-Slices/slices/noteslice';

function SingleNote(id,title,desc) {

    const dispatch = useDispatch();
    const textinput = useRef();
    const notes = useSelector((state) => state.notesReducer.notes);


    function updateNote(id , desc){
      dispatch(updateNote({
          desc: textinput.current.value,
          id: id,
      }))
  }

  const renderCard = (props) => {
    const id = props.id;
    return (
        <div className="card" key={id}>
            <textarea type="text" defaultValue={props.desc} ref={textinput}/>
            <button className='buttom' onClick={() => updateNote(id,props.desc)}>update</button>
            <div className="buttom">
            <button onClick={()=> dispatch(deleteNote(id))}>Delete</button>
            </div>
        </div>
    )
  }

  
  return (
    <div>
     
     {notes.map(renderCard)}
        
    </div>
  )
}

export default SingleNote;