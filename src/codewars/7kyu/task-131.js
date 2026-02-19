// Source: src/codewars.js
// Task: 131
// Inferred kyu: 7kyu

    //Задача 131
    // Найдите число с наибольшим количеством цифр.
    //     Если два числа в массиве аргументов имеют одинаковое количество цифр, верните первое из них в массиве.

    function findLongest(array) {
        let result = [0]
        for (let num of array) {
            if (num.toString().length > result.toString().length) {
                result = num
            }
        }
        return result
    }
