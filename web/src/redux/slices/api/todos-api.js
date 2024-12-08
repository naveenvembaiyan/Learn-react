import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// export const getTodos = async () => {
//   try {
//     const response = await axiosInstance.get('/todos');
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching todos:', error);
//     throw error;
//   }
// };

// export const createTodo = async () => {
//   try {
//     const response = await axiosInstance.post('/todos');
//     return response.data;
//   } catch {
//     console.error('Error fetching todos:', error);
//     throw error;
//   }
// };

export const getTodos = async () => {
  const response = await axiosInstance.get('/todos');
  console.log('get api', response.data);
  return response.data;
};

export const createTodo = async (newTodo) => {
  const response = await axiosInstance.post('/todos', newTodo);
  console.log('create api', response.data);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axiosInstance.delete(`/todos/${id}`);
};

export const updateTodo = async (id, updatedTodo) => {
  const response = await axiosInstance.put(`/todos/${id}`, updatedTodo);
  return response.data;
};
