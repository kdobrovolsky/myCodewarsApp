// Source: src/codewars.js
// Task: 119
// Inferred kyu: 7kyu

    //Задача 119
    // Задача: Напишите функцию, которая находит второе максимальное число в массиве.

    const secondMax = (arr) => {
        if (arr.length <= 1) return null;
        const sortArray = [...arr].sort((a, b) => b - a);
        const max = sortArray[0]
        for (let i = 1; sortArray.length > i; i++) {
            if (sortArray[i] < max) {
                return sortArray[i]
            }
        }

        return null
    }
