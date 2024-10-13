
const addButton=document.getElementById('add-task-btn');
const taskInput=document.getElementById('task-input');
const taskList=document.getElementById('task-list');
function addTask()
{
    var taskText=taskInput.value.trim();
    if(!taskText=='')
    {
        const li=document.createElement('li');
        li.textContent=taskText;
//Create the button element
  const removeButton = document.createElement('button');
//Set the text content
  removeButton.textContent = 'Remove';
//Add the class name
removeButton.classList.add('remove-btn'); // Using classList.add to add class
//Assign the onclick event to remove the li
   removeButton.onclick = function() {
    taskList.removeChild(li);
};
//Append the remove button to the li
li.appendChild(removeButton);

//Append the li to the task list
taskList.appendChild(li);

// Clear the task input field
taskInput.value = '';
saveTasks();
    }
    else
    {
        alert('Please enter value');

    }
}
addButton.addEventListener('clicked',addTask);
taskInput.addEventListener('keypress',function(event){
if(event.key==='Enter')
{
    addTask();   
}
});

// Function to load tasks from Local Storage
function loadTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(taskText => {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.onclick = function() {
            removeTask(taskText);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Function to save tasks to Local Storage
function saveTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove a task
function removeTask(taskText) {
    const taskList = document.getElementById('task-list');
    const tasks = Array.from(taskList.children);
    
    tasks.forEach(task => {
        if (task.firstChild.textContent === taskText) {
            taskList.removeChild(task);
        }
    });

    saveTasks(); // Update Local Storage after removal
}
// Invoke addTask on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    addTask();
});