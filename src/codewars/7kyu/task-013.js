// Source: src/codewars.js
// Task: 13
// Inferred kyu: 7kyu

    // Задача 13
    // Напишите функцию, которая складывает два вызова.
    //     Все входные данные будут целыми числами.
// 1
    const add = (a) => {
        return function (b) {
            return a + b;
        }
    }
    // 2
    const add2 = a => b => a + b
