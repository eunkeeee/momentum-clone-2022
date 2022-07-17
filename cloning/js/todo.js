const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let todos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  // localStorage에는 string만 저장 가능 => JSON.stringify를 통해 string으로 변환
  // 후에 parse를 통해 다시 array로 변환 가능함
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "X";
  // 여러 버튼 간에 어떤 버튼이 어떤 list를 가리키는지 구분하지 못함
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit() {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); => just a string
if (savedToDos) {
  // there is something saved in local storage
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  // console.log(parsedToDos); => alive array
  parsedToDos.forEach(paintToDo); // shortcut
} else {
}
