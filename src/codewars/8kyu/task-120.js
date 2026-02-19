// Source: src/codewars.js
// Task: 120
// Inferred kyu: 8kyu

    //Задача 120
    //Перевернуть строку

    const reverseString = (str) => {

        const result = []
        for (let i = str.length - 1; i >= 0; i--) {
            result.push(str[i])
        }
        return result.join('')
    }
