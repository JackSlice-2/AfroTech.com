import React, { useState } from 'react';
import styled from 'styled-components';

export const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [url, setURL] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && url && desc) {
      addTodo({ task, url, desc });
      setTask('');
      setURL('');
      setDesc('');
    }
  };

  const Button = styled.button`
    background-color: darkblue;
    color: white;
    font-weight: 500;
    width: 150px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <label className='p-2 text-gray-300'>Tool name</label>
      <div className='w-full'>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="What is the task today?"
      />
      </div>
      <label className='p-2 text-gray-300'>Tool Description</label>
      <div className='w-full'>
      <input
        type="desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="todo-input shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter Description"
      />
      </div>
      <label className='p-2 text-gray-300'>Tool URL</label>
      <div className='w-full'>
      <input
        type="url"
        value={url}
        onChange={(e) => setURL(e.target.value)}
        className="todo-input shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter URL"
      />
      </div>
      <div className='p-2'/>
      <Button type="submit" className="todo-btn">
        Add Task
      </Button>
    </form>
  );
};
