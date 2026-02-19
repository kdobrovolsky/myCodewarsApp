// Source: src/codewars.js
// Task: 3
// Inferred kyu: 8kyu

    // Задача 3.
    // Постройте функцию, которая возвращает массив целых чисел от n до 1, где n > 0.

    const reverseSeq = (n) => {
        const arr = []
        for (let i = 1; i <= n; i++) {
            arr.push(i)
        }
        return arr.reverse()
    };
