// Source: src/codewars.js
// Task: 87
// Inferred kyu: 8kyu

    //Задача 87
    // Ваша задача — просуммировать разности между последовательными парами в массиве, упорядоченном по убыванию.
    //     Пример
    //     [2, 1, 10] --> 9
    // В порядке убывания: [10, 2, 1]
    // Сумма: (10 - 2) + (2 - 1) = 8 + 1 = 9

    function sumOfDifferences(arr) {
        if (arr.length <= 1) return 0;

        const sortedArr = arr.sort((a, b) => b - a);
        let sum = 0;

        for (let i = 0; i < sortedArr.length - 1; i++) {
            sum += sortedArr[i] - sortedArr[i + 1];
        }

        return sum;
    }
