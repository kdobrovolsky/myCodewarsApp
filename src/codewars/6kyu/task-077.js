// Source: src/codewars.js
// Task: 77
// Inferred kyu: 6kyu

    //Задача 77
    // Дана строка со словами. Вам нужно найти слово с наибольшим количеством очков.
    //     Каждая буква слова приносит очки в соответствии со своей позицией в алфавите: a = 1, b = 2, c = 3 и так далее.
    //     Например, счет слова abad равен 8 (1 + 2 + 1 + 4).
    //     Вам нужно вернуть слово с наибольшим количеством очков в виде строки.
    //     Если два слова имеют одинаковый счет, верните слово, которое встречается раньше в исходной строке.
    //     Все буквы будут в нижнем регистре, и все входные данные будут корректными.

    function high(x) {
        const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
        const xToLow = x.toLowerCase().split(' ')
        const sumTo = xToLow.map((word) => {
            let sum = 0
            for (let i = 0; i < word.length; i++) {
                const letterIndex = alph.indexOf(word[i])
                sum += letterIndex + 1
            }
            return sum
        })
        const maxScore = Math.max(...sumTo)
        const maxIndex = sumTo.indexOf(maxScore)
        return xToLow[maxIndex]
    }
