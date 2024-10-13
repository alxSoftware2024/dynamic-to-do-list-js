//DOM document loaded
document.addEventListener('DOMContentLoaded',function()
{
const addButton=document.getElementById('Add Task');
const taskInput=document.getElementById('task-input');
const taskList=document.getElementById('task-list');
function addTask()
{
    var taskText=taskInput.value.trim();
    if(!taskText=='')
    {
        const li=document.createElement('li');
        li.textContent=taskText;
        // Create the button element
  const removeButton = document.createElement('button');
// Set the text content
  removeButton.textContent = 'Remove';
// Add the class name
  removeButton.className = 'remove-btn';
    }
    else
    {
        alert('Please enter value');

    }
}
});