const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("div-todo");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  console.log(event);
  const clickedSticker = event.target.parentElement.parentElement;
  clickedSticker.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(clickedSticker.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const div = document.createElement("div");
  div.classList.add("todo-sticker");
  div.id = newTodo.id;

  const divDel = document.createElement("div");
  divDel.classList.add("del-todo");

  const delButton = document.createElement("div");
  delButton.classList.add("del-button");
  delButton.innerText = "remove";

  const divContent = document.createElement("div");
  divContent.classList.add("del-content");
  divContent.innerText = newTodo.text;

  delButton.addEventListener("click", deleteToDo);

  divDel.appendChild(delButton);
  div.appendChild(divDel);
  div.appendChild(divContent);
  toDoList.appendChild(div);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
