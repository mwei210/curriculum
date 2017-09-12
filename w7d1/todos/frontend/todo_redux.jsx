import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { allTodos } from './reducers/selectors';
import TodoList from './components/todo_list/todo_list';

import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
})

const store = configureStore();
window.store = store;
window.allTodos = allTodos;
