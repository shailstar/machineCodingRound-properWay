// Define UI elements
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// Define functions for adding, completing, and deleting tasks
function addTaskToList(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task}</span>
    <button class="delete-btn">Delete</button>
  `;
  todoList.appendChild(li);
}

function completeTask(event) {
  const li = event.target.parentNode;
  li.classList.toggle('complete');
}

function deleteTask(event) {
  const li = event.target.parentNode;
  todoList.removeChild(li);
}

// Define event listeners
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTask = input.value.trim();
  if (newTask !== '') {
    addTaskToList(newTask);
    input.value = '';
  }
});

todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    deleteTask(event);
  }
  if (event.target.tagName === 'SPAN') {
    completeTask(event);
  }
});