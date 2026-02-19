// Source: src/codewars.js
// Task: 55
// Inferred kyu: 8kyu

    //Задача 55
    // Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6.
    // Если введенное значение является строкой, оно должно возвращать "Ошибка".

    function problem(x) {
        if (typeof x === 'string') return 'Error'
        return x * 50 + 6
    }
