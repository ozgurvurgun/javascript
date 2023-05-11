const textInputDOM = document.getElementById("todo-input");
const btnAddTodoDOM = document.querySelector("#add-todo");
const todosDOM = document.getElementById("todos");
const btnClearAllDOM = document.getElementById("clear-all");
let inputValue = "";
class Storage {
  static addTodoStorage(todoArray) {
    let storage = localStorage.setItem("todo", JSON.stringify(todoArray));
    return storage;
  }
  static StorageGet() {
    let storage =
      localStorage.getItem("todo") === null
        ? []
        : JSON.parse(localStorage.getItem("todo"));
    return storage;
  }
}
let todoArray = Storage.StorageGet();

btnAddTodoDOM.addEventListener("click", function (e) {
  e.preventDefault();
  let id = todoArray.length + 1;
  inputValue = textInputDOM.value;
  const TodoOBJ = new Todo(id, inputValue);
  todoArray.unshift(TodoOBJ);
  UI.alert("Todo added");
  UI.inputClear();
  UI.displayTodos();
  //!add to localeStorage
  Storage.addTodoStorage(todoArray);
  console.log(todoArray);
});

class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

class UI {
  static displayTodos() {
    let result = "";
    if (todoArray.length === 0) {
      todosDOM.innerHTML = "list is empty!";
    } else {
      todoArray.forEach((element) => {
        result += `
      <li class="flex justify-between border px-4 py-3 flex items-center">
          <span>${element.title}</span>
          <button class="text-red-400 remove" data-id="${element.id}">Sil</button>
      </li>
      `;
      });
      todosDOM.innerHTML = result;
    }
  }
  static inputClear() {
    textInputDOM.value = "";
  }
  static clearTodos() {
    btnClearAllDOM.addEventListener("click", function () {
      todoArray = [];
      Storage.addTodoStorage(todoArray);
      UI.displayTodos();
    });
  }
  static alert(text) {
    //window.alert(text);
  }
  static removeTodo() {
    todosDOM.addEventListener("click", function (e) {
      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
        let btnID = e.target.dataset.id;
        UI.removeTodoArray(btnID);
      }
    });
  }
  static removeTodoArray(id) {
    todoArray = todoArray.filter((item) => item.id !== +id);
    Storage.addTodoStorage(todoArray);
    UI.displayTodos();
  }
}

window.addEventListener("DOMContentLoaded", function () {
  UI.removeTodo();
  UI.displayTodos();
  UI.clearTodos();
});
