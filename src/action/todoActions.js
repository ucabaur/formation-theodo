import TodoApi from '../api/mockTodoApi';
import * as cst from './constants';

export function loadTodoSuccess(todos){
  return {type: cst.LOAD_TODOS_OK, todos};
}

export function loadTodoFail(){
  return {type: cst.LOAD_TODOS_KO}
}

export function loadTodos(){
  return dispatch => {
    return TodoApi.getAllItems().then(todos => {
      dispatch(loadTodoSuccess(todos));
    }).catch(error => {
      dispatch(loadTodoFail());
    });
  }
}
