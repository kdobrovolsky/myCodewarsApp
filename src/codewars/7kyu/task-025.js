// Source: src/codewars.js
// Task: 25
// Inferred kyu: 7kyu

    // Задача 25
    // Дополни решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается на второй аргумент (тоже строка).
    // Примеры:
    //     Входные данные: "abc", "bc"
    // Результат: true
    // Входные данные: "abc", "d"
    // Результат: false

    function solution(str, ending) {
        return str.endsWith(ending);
    }
