// Source: src/codewars.js
// Task: 107
// Inferred kyu: 7kyu

    //Задача 107

    var capitals = function (word) {
        const arrWord = word.split('')
        const result = []
        for (let i = 0; i < word.length; i++) {
            arrWord[i] === arrWord[i].toUpperCase ? result.push(i) : undefined


        }
        return result
    };
