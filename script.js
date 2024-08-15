// scripts.js

// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = {
            id: Date.now(),
            text: taskText,
        };
        tasks.push(task);
        displayTasks();
        taskInput.value = '';
    }
}

// Function to display all tasks
function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <div class="actions">
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

// Function to edit a task
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    const newTaskText = prompt('Edit your task:', task.text);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        task.text = newTaskText.trim();
        displayTasks();
    }
}

// Event listener for adding a task
addTaskButton.addEventListener('click', addTask);

// Initial display of tasks
displayTasks();
