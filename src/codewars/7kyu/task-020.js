// Source: src/codewars.js
// Task: 20
// Inferred kyu: 7kyu

    // Задача 20
    // Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
    // Для примера, когда передается массив [19, 5, 42, 2, 77], вывод должен быть 7.
    // [10, 343445353, 3453445, 3453545353453] должен вернуть 3453455.

    function sumTwoSmallestNumbers(numbers) {
        numbers.sort((a, b) => a - b)
        return numbers[0] + numbers[1]
    }
