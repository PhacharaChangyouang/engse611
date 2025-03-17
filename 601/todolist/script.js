const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();
  
  // ตรวจสอบความยาวของข้อความ
  if (todoText.length > 50) {
    alert("Task must be less than 50 characters.");
    return;
  }

  if (todoText.length > 0) {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    todos.push(todo);
    todoInput.value = "";
    renderTodos();
  }
}

function deleteTodo(id) {
  // แสดง confirm box ก่อนลบ
  const confirmation = confirm("Are you sure you want to delete this task?");
  if (confirmation) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");
    const myCheck = document.createElement("input");

    myCheck.setAttribute("type", "checkbox");

    todoText.textContent = todo.text;
    todoDeleteButton.textContent = "Delete";

    // ฟังก์ชันเช็คการทำงานเสร็จ
    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
      myCheck.checked = true;
    }

    todoDeleteButton.addEventListener("click", () => deleteTodo(todo.id));

    todoItem.appendChild(myCheck);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);

    myCheck.addEventListener("click", () => toggleCompleted(todo.id));

    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodos();
