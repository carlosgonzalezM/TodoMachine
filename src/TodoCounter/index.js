import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){

  const {completedTodos, totalTodos} = React.useContext(TodoContext)
    return (
      totalTodos === completedTodos ?
      <h1>
        Has completado todos los TODOS
      </h1>
      : 
      <h1>
        Has completado {completedTodos} de {totalTodos} TODOS
      </h1>
    );
  }

  export {TodoCounter};