import React from 'react';
import TodoItem from './TodoItem';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as todoActions from '../action/todoActions';

class TodoContainer extends React.Component {
  constructor(props,context){
    super(props, context);
    this.state = {
      todos:[
        {
          id: 1,
          item: 'Hello world'
        },{
          id: 2,
          item: 'Hello everyone'
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <input type="text" />
        <ul>
          {this.props.todos.map((todo,index) =>
            <TodoItem todo={todo} key={index} />
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(store, ownProps){
  return {
    todos: store.todos
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
