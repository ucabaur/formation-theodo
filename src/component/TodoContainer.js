import React from 'react';
import TodoItem from './TodoItem';

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
    console.log(this.state);
    return (
      <div>
        <input type="text" />
        <ul>
          {this.state.todos.map((todo,index) =>
            <TodoItem todo={todo} key={index} />
          )}
        </ul>
      </div>
    );
  }
}

export default TodoContainer;
