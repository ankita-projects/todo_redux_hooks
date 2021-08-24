import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from '../store/action'

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();
  const toggleTodo = (id) =>({
      type: actionTypes.TOGGLE_TODO,
      id: id
  })
  return (
     <div> 
   <ul>
      {notes.map((note) => (<li key={note.id} onClick={() => dispatch(toggleTodo(note.id))} className={note.completed ? 'strike todo' : 'todo'}>{note.text}</li>))}
    </ul>
    </div> 
  );
};
export default Notes;