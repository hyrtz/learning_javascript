
/*
steps 
1. create an array to store todos
2. when we click "Add",
3. Get text from textbox(input)
4. Add it to array 

5. loop thru the arraya
6. create some HMTL code for each todo
8. put the HTML on web page 
*/

// const todoList = [{
//   name: 'make dinner', 
//   dueDate: '2025-07-15'
// }, { 
//   name: 'wash dishes',
//   dueDate: '2025-07-15'
// }];

// retrieve prev and new todo storage
const todoList = JSON.parse(localStorage.getItem('todoList')) || []; 
renderTodoList();

// render -> display something on page 
function renderTodoList() {
  let todoListHTML = '';

  // generating HTML technique using JS 
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject; 

    const hmtl = `
      <div class="name-todo">${name}</div>
      <div class="due-date-todo">${dueDate}</div>
      <button class="delete-todo-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;
    todoListHTML += hmtl;
  }

  // putting div element to JS 
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  // get the text from the textbox
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');

  // using value property -> get the text from the textbox 
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  // add name to the todoList array 
  todoList.push({
    name,
    dueDate
  });

  // localStorage.setItem('score', JSON.stringify(score));
  // .stringify -> converts arr to str
  localStorage.setItem('todoList', JSON.stringify(todoList));

  inputElement.value = '';  // clear input field, once todo is added 

  renderTodoList();
}
