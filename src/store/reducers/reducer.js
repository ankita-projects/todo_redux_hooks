import * as actionTypes from '../action'

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return state.concat({
        id: action.id + 1,
        text: action.text,
        completed: action.completed
      })
    case actionTypes.TOGGLE_TODO:
      const noteToChange = state.find(n => n.id === action.id)
      const changeNote = { ...noteToChange, completed: !noteToChange.completed }
      return state.map((note) => (note.id !== action.id ? note : changeNote))
  }
  return state
}

export default reducer