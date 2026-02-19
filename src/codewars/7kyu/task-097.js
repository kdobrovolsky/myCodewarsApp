// Source: src/codewars.js
// Task: 97
// Inferred kyu: 7kyu

    //Задача 97
    // Ваша задача — удалить все повторяющиеся слова из строки, оставив только первые вхождения каждого слова.
    //     Пример:
    // Ввод:
    //     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
    // Вывод:
    //     'alpha beta gamma delta'

    function removeDuplicateWords(s) {
        const removeDublicate = new Set(s.split(' '))
        const result = []
        for (let sRes of removeDublicate) {
            result.push(sRes)
        }
        return result.join(' ')
    }
