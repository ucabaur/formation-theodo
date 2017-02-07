import * as cst from '../action/constants';

export default function todos(state=[], action){
  switch (action.type) {
    case cst.LOAD_TODOS_OK:
      return action.todos;
    case cst.ADD_TODO:
      return [...state, action.payload]
    case cst.DELETE_TODO:
      return [
        ...state.slice(0,action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
}
