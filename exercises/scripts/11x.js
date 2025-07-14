const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        updateList();
        renderTodoList();
      " class="delete-todo-button">Delete</button>  
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".js-todo-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate,
  });

  updateList();

  inputElement.value = "";

  renderTodoList();
}

function updateList() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
