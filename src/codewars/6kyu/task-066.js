// Source: src/codewars.js
// Task: 66
// Inferred kyu: 6kyu

    //Задача 66
    // Дан массив (длиной не менее 3, но потенциально очень большой), содержащий целые числа.
    //     Массив либо полностью состоит из нечётных чисел, либо полностью из чётных чисел, за исключением одного целого числа N.
    //     Напишите метод, который принимает массив в качестве аргумента и возвращает этот «выброс» N.
    //     Примеры
    //     [2, 4, 0, 100, 4, 11, 2602, 36] --> 11 (единственное нечётное число)
    // [160, 3, 1719, 19, 11, 13, -21] --> 160 (единственное чётное число)

    function findOutlier(integers) {
        let evenCount = 0;
        let oddCount = 0;
        let lastEven, lastOdd;

        for (let num of integers) {
            if (num % 2 === 0) {
                evenCount++;
                lastEven = num;
            } else {
                oddCount++;
                lastOdd = num;
            }
        }

        return evenCount === 1 ? lastEven : lastOdd;
    }
