// Select DOM elements
const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

//Event Listebner
document.addEventListener("DOMContentLoaded", loadTodos);
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", handleTodoActions);


//Function to add a new todo
function addTodo(e){
  e.preventDefault();

  const todoText = todoInput.value.trim();

  if(todoText === ""){
    alert("Please enter a task");
    return;
  }

  //Create todo element
  const todoItem = document.createElement("li");
  todoItem.innerHTML=`
  <input type="checkbox" class = "todo-checkbox" />
  <span class="todo-text">${todoText}</span>
  <button class="delete-btn">Delete</button>
  `;
  
  //Add toogle item for completed item
  const checkbox = todoItem.querySelector(".todo-checkbox");
  const todoTextElement = todoItem.querySelector(".todo-text");

  checkbox.addEventListener("change", ()=>{
    todoTextElement.classList.toggle("completed", checkbox.checked);
  });

  //Add task to the list
  todoList.appendChild(todoItem);

  //save task to localStorage
  saveTodoToLocalStorage(todoText);

  //Clear the input filed
  todoInput.value="";


}

//Handle Action(Delete)
function handleTodoActions(e){
  if(e.target.classList.contains("delete-btn")){
    todoItem = e.target.parentElement;
    deleteTodoFromLocalSorage(todoItem.querySelector(".todo-text").textContent);
    todoItem.remove();
  }
}

//Save todo to localStorage
function saveTodoToLocalStorage(todo){
  let todos = getTodosFromLocalStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//load todo's from loclaStorage
function loadTodos(){
  let todos = getTodosFromLocalStorage();
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
      todoItem.innerHTML = `
      <input type="checkbox" class = "todo-checkbox" />
      <span class="todo-text">${todo}</span>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(todoItem);
  });
}

//Get todo's from localStorage
function getTodosFromLocalStorage(){
  let todos=localStorage.getItem("todos");
  if(!todos){
    todos = [];
  }else{
    todos = JSON.parse(todos);
  }
  return todos;
}

//delete todo from local storage
function deleteTodoFromLocalSorage(todoText){
  let todos = getTodosFromLocalStorage();
  todos = todos.filter((todo) => todo !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}