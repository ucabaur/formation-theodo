import * as cst from '../action/constants';

export default function counter(state=0, action){
  switch (action.type) {
    case cst.LOAD_TODOS_OK:
      return action.todos.length;
    case cst.ADD_TODO:
      return state + 1
    case cst.DELETE_TODO:
      return state - 1
    default:
      return state;
  }
}
