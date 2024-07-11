document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');
    const newTaskInput = document.getElementById('new-task');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    function addTask(task) {
        if (task.trim() === '') return;

        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});