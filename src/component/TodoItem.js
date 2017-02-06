import React from 'react';

const TodoItem = ({todo, deleteHandler}) => {
  return (
    <li>
      {todo.id} : {todo.item}
      <button>X</button>
    </li>
  );
};

export default TodoItem;
