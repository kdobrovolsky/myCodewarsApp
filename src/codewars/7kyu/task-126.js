// Source: src/codewars.js
// Task: 126
// Inferred kyu: 7kyu

    //Задача 126
    // Напишите метод, который принимает один аргумент — имя, а затем приветствует это имя с заглавной буквы и заканчивается восклицательным знаком.
    //     Пример:
    // text
    // "riley" --> "Hello Riley!"
    // "JACK"  --> "Hello Jack!"

    let greet = function (name) {
        const capitalLetter = name.split("")[0].toUpperCase();
        const names = name.toLowerCase().split('').splice(1).join('');
        return `Hello ${capitalLetter.concat(names)}!`
    };
