document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('showLectures');
    const table = document.getElementById('lectures');

    if (button && table) {
        button.addEventListener("click", () => {
            table.classList.toggle("show");
        });
    }
});

document.querySelector('#animation').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'red' ? '' : 'red';
});

document.querySelector('#lection').addEventListener('click', function() {
    const table = document.getElementById('lections');
    table.style.display = (table.style.display === 'none' || table.style.display === '' ? 'table' : 'none');
    setTimeout(() => table.style.opacity = (table.style.opacity === '0' || table.style.opacity === '' ? '1' : '0'), 0);
});

// 5. Анимация для сообщения формы
document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('testform');
    message.textContent = 'Форма отправлена!';
    message.style.color = 'blue';
    setTimeout(() => {
        message.style.color = 'green';
    }, 300);
});