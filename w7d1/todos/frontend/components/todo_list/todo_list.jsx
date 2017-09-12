import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos, receiveTodo }) => {
  const todoListItems = todos.map((todo, idx) => (
    <TodoListItem key={idx} todo={todo} />
  ));

  return (
    <div className='todo-list'>
      <ul className='todo-list-items'>
        {todoListItems}
      </ul>
    </div>
  );
};

export default TodoList;
