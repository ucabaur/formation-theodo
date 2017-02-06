import React from 'react';

class TodoContainer extends React.Component {
  constructor(props,context){
    super(props, context);

  }

  render(){
    return (
      <div>
        <input type="text" />
        <ul>
          <li>
            Hello world
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoContainer;
