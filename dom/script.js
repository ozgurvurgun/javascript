const textInputDOM = document.getElementById("todo-input");
const btnAddTodoDOM = document.querySelector("#add-todo");
const todosDOM = document.getElementById("todos");
const btnClearAllDOM = document.getElementById("clear-all");
let inputValue = "";
let todos = [];

// 1
textInputDOM.addEventListener("change", function (event) {
  inputValue = event.target.value;
});

// *
btnClearAllDOM.addEventListener("click", function () {
  todos.splice(0, todos.length);
  displayTodos();
});

// 2
btnAddTodoDOM.addEventListener("click", function (e) {
  e.preventDefault();
  todos.unshift({ id: todos.length + 1, todoTitle: inputValue });
  textInputDOM.value = "";
  displayTodos();
});

// 3
function displayTodos() {
  let result = "";
  if (todos.length === 0) {
    todosDOM.innerHTML = "list is empty!";
  } else {
    todos.forEach((element) => {
      result += `
      <li class="flex justify-between border px-4 py-3 flex items-center">
          <span>${element.todoTitle}</span>
          <button class="text-red-400" onclick="deleteTodo(${element.id})">Sil</button>
      </li>
      `;
    });
    todosDOM.innerHTML = result;
  }
}

// *
function deleteTodo(id) {
  let deletedId;
  for (const key in todos) {
    if (todos[key].id == id) {
      deletedId = key;
    }
  }
  todos.splice(deletedId, 1);
  displayTodos();
}

// 0
document.addEventListener("DOMContentLoaded", displayTodos());
