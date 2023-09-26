import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import react from 'react';
import { TodoLoading } from '../TodoLoading';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI(){

    const { 
      searchedTodos, 
      completeTodo, 
      deleteTodo, 
      loading, 
      error,
      openModal,
      setOpenModal
    } = react.useContext(TodoContext);
    return (
        <>
          
          <TodoCounter/>
          <TodoSearch/>
        
            <TodoList>
            {!loading && !searchedTodos.length && <p>crea tu primer TODO</p>}
  
              {loading && <TodoLoading/>}
              {error && <p>hubo un error</p>}
  
              {searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text = {todo.text} 
                  completed = {todo.completed}
                  onComplete = {()=> completeTodo(todo.text)}
                  onDelete = {()=>deleteTodo(todo.text)}
                />
      
                
              ))}
            </TodoList>
          <CreateTodoButton setOpenModal={setOpenModal} />

          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
        </>
      );
}

export {AppUI};