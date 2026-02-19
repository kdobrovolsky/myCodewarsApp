// Source: src/codewars.js
// Task: 93
// Inferred kyu: 7kyu

    // Задача 93
    // Задача: "Найди пропущенное число"
    //
    // Дан массив, содержащий числа от 1 до N (включительно), где одно число пропущено. Массив не отсортирован. Найди пропущенное число.
    //
    //     Пример:
    //
    // text
    // Вход: [3, 7, 1, 2, 8, 4, 5]  // N = 8, пропущено 6
    // Выход: 6

    function findMissingNumber(arr) {
        const n = arr.length + 1;
        const expectedSum = n * (n + 1) / 2;
        const actualSum = arr.reduce((sum, num) => sum + num, 0);
        return expectedSum - actualSum;
    }
