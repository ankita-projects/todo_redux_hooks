import React from 'react';
import * as actionTypes from '../store/action'
import { useSelector, useDispatch } from "react-redux";

const NewNote =()=>{
    const notes = useSelector((state) => state);
    let i = notes.length;
    const dispatch = useDispatch()
    const addTodo = (text) =>({
        type: actionTypes.ADD_TODO,
        id: i++,
        text: text,
        completed: false,
    })

    return (
        <form onSubmit={e => {
          e.preventDefault()
          dispatch(addTodo(e.target.noteInput.value))
          e.target.noteInput.value = ''
        }}>
          <input type="text" name="noteInput"></input>
          <input type="submit" value="Add note"></input>
        </form>
      );
    };
    
    export default NewNote;
    
    const randId = times => {
      let yourId = 0
      while (times > 0) {
        times--
        yourId += Math.random().toString(36).slice(2)
      }
      return yourId
    }
