// Source: src/codewars.js
// Task: 121
// Inferred kyu: 7kyu

    //Задача 121
    //  Напиши функцию, которая принимает строку и возвращает самое длинное слово.
    const longestWord = (str) => {
        const strArr = str.split(' ')
        let longest = ''
        for (let word of strArr) {
            if (word.length > longest.length) {
                longest = word
            }
        }
        return longest
    }
