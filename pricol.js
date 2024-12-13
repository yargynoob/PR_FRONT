
let userName = prompt("Введите ваше имя:");
let userAge = prompt("Введите ваш возраст:");
alert(`Привет, ${userName}! Вам ${userAge} лет.`);
console.log(`Привет, ${userName}! Вам ${userAge} лет.`);


if (userAge >= 18) {
    alert("Вы совершеннолетний.");
    console.log("Вы совершеннолетний.");
} else {
    alert("Вы несовершеннолетний.");
    console.log("Вы несовершеннолетний.");
}


let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessedNumber = prompt("Угадайте число от 1 до 10:");

if (parseInt(guessedNumber) === randomNumber) {
    alert("Поздравляем! Вы угадали число!");
    console.log("Поздравляем! Вы угадали число!");
} else {
    if (parseInt(guessedNumber) < 5) {
        alert("Вы не угадали. Ваше число меньше 5.");
        console.log("Вы не угадали. Ваше число меньше 5.");
    } else {
        alert("Вы не угадали. Ваше число больше 5.");
        console.log("Вы не угадали. Ваше число больше 5.");
    }
}


const correctPassword = "12345";
let userPassword = prompt("Введите пароль:");

if (userPassword === correctPassword) {
    alert("Доступ разрешен.");
    console.log("Доступ разрешен.");
} else if (userPassword === "") {
    alert("Пароль не должен быть пустым.");
    console.log("Пароль не должен быть пустым.");
} else {
    alert("Доступ запрещен.");
    console.log("Доступ запрещен.");
}


let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

let result;
if (operator === "+") {
    result = number1 + number2;
} else if (operator === "-") {
    result = number1 - number2;
} else if (operator === "*") {
    result = number1 * number2;
} else if (operator === "/") {
    result = number1 / number2;
} else {
    alert("Неверный оператор");
    console.log("Неверный оператор");
}

if (result !== undefined) {
    alert(`Результат: ${result}`);
    console.log(`Результат: ${result}`);
}