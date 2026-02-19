// Source: src/codewars.js
// Task: 138
// Inferred kyu: 7kyu

    //Задача 138
    // Напишите функцию, которая возвращает количество переданных ей аргументов.
    //     Примеры:
    // args_count() --> 0
    // args_count('a') --> 1
    // args_count('a', 'b') --> 2

    const args_count = (...arg) => {
        return arg.length;
    }
