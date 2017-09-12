import React from 'react';

const TodoListItem = ({ todo }) => (
  <div className="todo-list-item">
    <li>
      {todo.title}
    </li>
  </div>
);

export default TodoListItem;
