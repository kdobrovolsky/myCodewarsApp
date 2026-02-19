// Source: src/codewars.js
// Task: 122
// Inferred kyu: 7kyu

    //Задача 122
    // Напиши функцию removeDuplicates(arr), которая принимает массив и возвращает новый массив без повторов.

    const removeDuplicates = (numberArray) => {
        const result = []
        for (let num of numberArray) {
            if (!result.includes(num)) {
                result.push(num)
            }
        }
        return result
    }
