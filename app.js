// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);



// funtions

function addTodo(event){
  //auto submitting रोक्ने । 
  event.preventDefault();

  if (todoInput.value){
    //todo DIV बनाउने
    const todoDiv = document.createElement('div');//<div></div>
    todoDiv.classList.add('todo');//<div class='todo'></div>
    // <li> लिस्ट बनाउने
    const newTodo = document.createElement('li');//<li></li>
    newTodo.innerText = todoInput.value;//<li>Hey</li>
    newTodo.classList.add('todo-item');//<li class = 'todo-item>Hey</li>
    todoDiv.appendChild(newTodo);
    //उदाहरण
    //<div class='todo'><li class="todo-item">Hey</li></div>
    //////////////////////////////////////////////
    //चेक button बनाउने(font awesome)
    const completedButton = document.createElement('button');//<button></button>
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);


    //trash button बनाउने
    const trashButton = document.createElement('button');//<button></button>
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //todolist मा जोड्ने वा append गर्ने
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value="";

  } else {
    todoInput.setAttribute('placeholder',"कृपया विवरण दिनुहोस्।");
    
  }
   
}

function deleteCheck(e){
  const item = e.target;
  //delete
  if(item.classList[0]==='trash-btn'){
    const todo = item.parentElement;
    todo.remove();
  }

  //checkmark
  if(item.classList[0]==="complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }

}