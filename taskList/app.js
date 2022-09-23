// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);

    // Remove task event
    taskList.addEventListener('click', removeTask);

    // clear task event
    clearBtn.addEventListener('click', clearTasks);

    // filter task event
    filter.addEventListener('keyup', filterTasks);
}

// Get tasks from Local storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach((task) => {
        // create li element
        const li = document.createElement('li');

        // Add class
        li.className = 'collection-item';

        // create text node and append to li
        li.appendChild(document.createTextNode(task));

        // create new link element
        const link = document.createElement('a');

        // add class
        link.className = 'delete-item secondary-content';

        // add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';

        // append the link to li
        li.appendChild(link);

        // append li to ul
        taskList.appendChild(li);
    })
}

// Add Task

function addTask(e){

    if(taskInput.value === "") {
        alert('Add a task')
    } else {
        // create li element
        const li = document.createElement('li');  // <li></li>

        // Add class
        li.className = 'collection-item';  // <li class='collection-item'></li>

        // create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value)); // <li class='collection-item'>Task One</li>

        // create new link element
        const link = document.createElement('a'); // <a></a>

        // add class
        link.className = 'delete-item secondary-content'; // <a class='delete-item secondary-content'></a>

        // add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'; 
        /**
         * e.g.
         * <a class='delete-item secondary-content'>
         *     <i class="fa fa-remove"></i>
         * </a>
         *  
         **/ 


        // append the link to li
        li.appendChild(link);
        /**
         * e.g.
         * <li class="collection-item">
         *      "Task one"
         *      <a class="delete-item secondary-content">
         *          <i class="fa fa-remove"></i>
         *      </a>
         * </li>
         */



        // append li to ul
        taskList.appendChild(li);
        /**
         * e.g.
         * <ul class="collection">
         *      <li class="collection-item">
         *          "Task one"
         *          <a class="delete-item secondary-content">
         *              <i class="fa fa-remove"></i>
         *          </a>
         *      </li>
         * </ul>
         * 
         */

        // Store in Local storage
        storeTaskInLocalStorage(taskInput.value);

        // clear input
        taskInput.value = '';

        e.preventDefault()
    } 
}

// Store task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    console.log(typeof tasks)
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){

        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();
            
            // Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach((task, index) => {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear tasks
function clearTasks(e) {
    // taskList.innerHTML = '';

    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }

    // clear from local storage
    clearTasksFromLocalStorage();
}

// clear tasks from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}
