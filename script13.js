document.getElementById('header').addEventListener('click', () => {
    alert('Вы кликнули на заголовок - так держать!');
});
document.addEventListener("DOMContentLoaded", () => {
    const studentImage = document.getElementById('student-photo');

if (studentImage) {
    studentImage.addEventListener("mouseover", () => {
        studentImage.style.transform = "scale(1.1)";
        studentImage.style.transition = "transform 0.3s";
    });

    studentImage.addEventListener("mouseout", () => {
        studentImage.style.transform = "scale(1)";
    });

    studentImage.addEventListener("click", () => {
        studentImage.src = "me_pov2.png";});

    studentImage.addEventListener("dblclick", () => {
        alert("Не налегай, у меня не так много любимых преподавателей");
    });
    
    } else {
    console.error("Изображение с ID #student-img не найдено.");
}
});

document.addEventListener("DOMContentLoaded", () => {
    // Находим изображение студента
    const studentImage = document.getElementById('student-photo');

    if (studentImage) {
        // Добавляем событие для вращения при наведении
        studentImage.addEventListener("mouseover", () => {
            studentImage.style.transition = "transform 0.5s ease-in-out";
            studentImage.style.transform = "rotate(360deg)";
        });

        // Возвращаемся к исходному состоянию при уходе мыши
        studentImage.addEventListener("mouseout", () => {
            studentImage.style.transition = "transform 0.5s ease-in-out";
            studentImage.style.transform = "rotate(0deg)";
        });
    } else {
        console.error("Изображение студента не найдено.");
    }
});