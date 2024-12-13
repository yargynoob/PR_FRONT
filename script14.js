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