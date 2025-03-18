const loginForm = document.querySelector('form[action="/process_form"]');
loginForm.addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        alert('กรุณากรอกอีเมลให้ถูกต้อง');
        event.preventDefault();
        return;
    }
    if (!/^[0-9]{10}$/.test(phoneInput.value)) {
        alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (ตัวเลข 10 หลัก)');
        event.preventDefault();
        return;
    }
    alert('ส่งฟอร์มสำเร็จ!');
});
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const task = todoInput.value.trim();
    if (task) {
        addTask(task);
        todoInput.value = '';
    }
});

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${task}</span>
        <button class="delete-button">Delete</button>
    `;
    todoList.appendChild(listItem);

    listItem.addEventListener('click', function(event) {
        if (event.target.tagName !== 'BUTTON') {
            listItem.classList.toggle('completed');
        }
    });

    const deleteButton = listItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });
}