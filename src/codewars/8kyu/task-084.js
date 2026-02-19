// Source: src/codewars.js
// Task: 84
// Inferred kyu: 8kyu

    //Задача 84
    // Когда предоставлена буква, верните её позицию в алфавите.
    // Вход :: "a"
    // Выход :: "Позиция в алфавите: 1"
    // Примечание: Тестируются только строчные английские буквы

    function position(letter) {
        const voyage = 'abcdefghijklmnopqrstuvwxyz'.split('')
        for (let position of voyage) {
            if (letter === position) {
                return `Position of alphabet: ${voyage.indexOf(position) + 1}`
            }
        }
    }
