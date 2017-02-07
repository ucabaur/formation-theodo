import React from 'react';

const TodoItem = ({todo, index, deleteHandler}) => {
  const buttonStyles = {
    backgroundColor:'red',
    borderRadius:'13px',
    height:'26px',
    width:'26px',
    marginLeft:'10px'
  }

  const mappingPriority = {
    0:'Pas important',
    1:'Important',
    2:'Urgent',
  }

  return (
    <li>
      {todo.item} ({mappingPriority[todo.priority] || 'Pas de priorite'} : {todo.due_date || 'Pas de due date'})
      <button style={buttonStyles} onClick={() =>{ deleteHandler(index)}}>X</button>
    </li>
  );
};

export default TodoItem;
