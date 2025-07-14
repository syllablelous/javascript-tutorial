const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".js-todo-input");
  const todo = inputElement.value;

  todoList.push(todo);

  inputElement.value = "";

  renderTodoList();
}
