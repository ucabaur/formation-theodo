import React from 'react';
import TodoItem from './TodoItem';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as todoActions from '../action/todoActions';

class TodoContainer extends React.Component {
  constructor(props,context){
    super(props, context);
    this.state = {
      item:'',
      priority:'',
      due_date:'',
      todos:[{
        priority: 2,
        due_date: '08/02/2017',
        item: 'Faire la formation'
      },
      {
        priority: 1,
        due_date: '13/02/2017',
        item: 'Faire du done'
      }]
    }

    this.setTodo = this.setTodo.bind(this);
    this.setPriority = this.setPriority.bind(this);
    this.setDueDate = this.setDueDate.bind(this);
    this.submit = this.submit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  setTodo(e){
    e.preventDefault();
    this.setState({ item: e.target.value });
  }

  deleteTodo(index){
    //this.props.actions.deleteTodo(index);
  }

  setPriority(e){
    e.preventDefault();
    this.setState({ priority: e.target.value });
  }

  setDueDate(e){
    e.preventDefault();
    this.setState({ due_date: e.target.value });
  }

  submit(e){
    e.preventDefault();
    const payload = Object.assign({},this.state);
    //this.props.actions.addTodo(payload);
  }

  render(){

    const containerStyle = {
      marginLeft: '30px',
      marginTop: '30px',
      backgroundColor: '#add8e6',
      padding: '5px'
    };

    return (
      <div style={containerStyle}>
        <input type="text" placeholder="item" size="20" onChange={this.setTodo}/>
        <input type="text" placeholder="priority" size="4" onChange={this.setPriority}/>
        <input type="text" placeholder="due date" size="8" onChange={this.setDueDate}/>
        <button onClick={this.submit}>Add</button>
        <ul>
          {this.state.todos.map((todo,index) =>
            <TodoItem todo={todo} index={index} key={index} deleteHandler={this.deleteTodo} />
          )}
        </ul>
      </div>
    );
  }
}

export default TodoContainer;
