// Source: src/codewars.js
// Task: 102
// Inferred kyu: 7kyu

    //Задача 102
    //В массиве найти максимальное число
    const findMax = (arrNumbers) => {
        const arrSort = arrNumbers.sort((a, b) => b - a)
        return arrSort[0]
    }

    function factorial(n) {
        if (n === 0) {
            return 1
        } else {
            return n * factorial(n - 1)
        }
    }
