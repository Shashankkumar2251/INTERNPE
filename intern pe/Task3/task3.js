document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('taskItem');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskTextElement.classList.add('completed');
            } else {
                taskTextElement.classList.remove('completed');
            }
        });

        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        const crossBtn = document.createElement('button');
        crossBtn.innerHTML = '&#10060;'; // Unicode for cross symbol
        crossBtn.classList.add('cross-btn');
        crossBtn.addEventListener('click', function () {
            taskItem.remove();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(crossBtn);

        taskList.appendChild(taskItem);
    }
});
