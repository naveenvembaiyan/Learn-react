import React, { useEffect, useState } from 'react';
import {
  getTodos,
  createTodo,
  deleteTodo,
} from '../../../redux/slices/api/todos-api';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        console.log(data);
        setTasks(data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTask = async () => {
    if (!input.trim()) {
      alert('Please enter a task!');
      return;
    }
    try {
      const maxId =
        tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;
      const newTodo = {
        title: input,
        completed: false,
        userId: 1,
        id: maxId + 1,
      };
      const createdTodo = await createTodo(newTodo);
      console.log(createTodo);
      setTasks([...tasks, createdTodo]);
      setInput('');
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTodo(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className='bg-white shadow-md rounded-lg p-6 w-1/2 mx-auto mt-20'>
      <h1 className='text-2xl font-bold text-center mb-4'>To-Do App</h1>
      <div className='flex items-center mb-4'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Enter a new task...'
          className='flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300'
        />
        <button
          onClick={handleAddTask}
          className='ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
          Add
        </button>
      </div>
      <ul className='space-y-2'>
        {tasks.map((task) => (
          <li
            key={task}
            className='flex justify-between items-center text-black bg-gray-100 px-4 py-2 rounded-lg shadow-sm'>
            <span>{task.title}</span>
            <div className='space-x-2'>
              <button
                onClick={''}
                className='text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600'>
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className='text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600'>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
