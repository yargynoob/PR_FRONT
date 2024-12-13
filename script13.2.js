document.querySelector('#practic').addEventListener('click', () => {
    let tableRows = document.querySelectorAll('#practics > tbody > tr');

    let secondTermData = [
        'Базовое бэкенд-приложение',
        'HTTP-запросы',
        'JSON и работа с ним',
        'HTTP-ответы',
        'Проектирование API',
        'Роутинг и его настройка',
        'NoSQL базы данных',
        'Обеспечение авторизации и доступа пользователей',
        'Работа сторонних сервисов уведомления и авторизации',
        'Основы ReactJS',
        'Работа с компонентами динамической DOM',
        'Использование хуков в React',
        "Основы микросервисной архитектуры",
        'Разработка классических модулей веб-приложений',
        'Разработка классических модулей веб-приложений',
        'Разработка классических модулей веб-приложений',
    ]

    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].children[1].textContent = secondTermData[i];
    }
});