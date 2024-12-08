ntListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todo-input');
  const addTodoButton = document.getElementById('add-todo');
  const todoList = document.getElementById('todo-list');

  addTodoButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();

    if (taskText) {
      const li = document.createElement('li');
      li.class =
        'flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm';

      const task = document.createElement('span');
      task.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.class =
        'text-red-500 hover:text-red-600 font-bold cursor-pointer';
      deleteButton.addEventListener('click', () => {
        li.remove();
      });

      li.appendChild(task);
      li.appendChild(deleteButton);

      todoList.appendChild(li);

      todoInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  });
});
