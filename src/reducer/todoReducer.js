import * as cst from '../action/constants';

export default function todos(state=[], action){
  switch (action.type) {
    case cst.LOAD_TODOS_OK:
      return action.todos;
    default:
      return state;
  }
}
