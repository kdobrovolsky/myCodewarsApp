// Source: src/codewars.js
// Task: 83
// Inferred kyu: 7kyu

    //Задача 83
    // Массив целых чисел, содержащий только чётные значения в том же порядке, в котором они были в исходном массиве

    function noOdds(values) {
        return values.filter(v => v % 2 === 1)
    }
