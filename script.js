const buttonNewTask = document.querySelector(".new-task button");
const taskbox = document.querySelector(".task-box");
const newTaskInput = document.querySelector(".new-task input");

buttonNewTask.addEventListener("click", addTask);


function addTask(e) {

  e.preventDefault();
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";

  const text = newTaskInput.value;
  const textItem = document.createElement("p");
  textItem.innerText = text;

  const buttonTrash = document.createElement("button");
  buttonTrash.innerHTML = '<i class="fa fa-trash"></i>';

  taskItem.appendChild(checkboxInput);
  taskItem.appendChild(textItem);
  taskItem.appendChild(buttonTrash);
  taskbox.appendChild(taskItem);

  buttonTrash.addEventListener("click", deleteTask);
  checkboxInput.addEventListener('click', completeTask);
  newTaskInput.value = "";
}
function deleteTask(e) {
  const buttonTrash = e.target.parentElement;
  const element = buttonTrash.parentElement;

  element.remove();
}
function completeTask(e) {
  e.target.parentElement.classList.toggle("complete");
}

