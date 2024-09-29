// Select DOM elements
const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

//Event Listebner

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

  //Clear the input filed
  todoInput.value="";

}

//Handle Action(Delete)
function handleTodoActions(e){
  if(e.target.classList.contains("delete-btn")){
    todoItem = e.target.parentElement;
    todoItem.remove();
  }
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
