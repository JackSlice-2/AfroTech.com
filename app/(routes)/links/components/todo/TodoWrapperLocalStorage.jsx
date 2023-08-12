import React, {useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import styled from 'styled-components';

uuidv4();

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

export const TodoWrapperLocalStorage = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = (todo) => {
        const newTodos = [
          ...todos,
          { id: uuidv4(), task: todo.task, url: todo.url, desc: todo.desc, completed: false, isEditing: false },
        ];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
      };

    const toggleComplete = id => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

  return (
    <Section><Container>
    <div className='TodoWrapper p-3'>
    <h1 className='text-4xl font-bold'>Usefull Tools & Cool Links</h1>
    <h3>Know any cool or usefull tools? Then drop a Link!</h3>
    <div className="py-5 w-full justify-center">
      <TodoForm addTodo={addTodo} />
    </div>
    <div className="py-10 grid gap-4 grid-cols-4">
        {todos.map((todo, index) => (
                <Todo task={todo} 
                key={index} 
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo} 
                />
            ) 
        )}
         </div>
    </div>
    </Container></Section>
  )
}
