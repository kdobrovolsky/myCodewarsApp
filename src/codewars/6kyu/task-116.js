// Source: src/codewars.js
// Task: 116
// Inferred kyu: 6kyu

    //Задача 116

    // Напишите функцию, которая принимает строку и возвращает объект с количеством каждого символа.

    const countChars = (str) => {

        const result = {}
        for (let char of str.toLowerCase()) {
            if (char === ' ') continue
            if (result[char]) {
                result[char] += 1;
            } else {
                result[char] = 1;
            }
        }
        return result
    }
