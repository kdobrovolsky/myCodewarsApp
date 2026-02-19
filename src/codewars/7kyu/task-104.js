// Source: src/codewars.js
// Task: 104
// Inferred kyu: 7kyu

    //Задача 104
    // Если a = 1, b = 2, c = 3 ... z = 26,
    //     Тогда l + o + v + e = 12 + 15 + 22 + 5 = 54
    // и f + r + i + e + n + d + s + h + i + p = 6 + 18 + 9 + 5 + 14 + 4 + 19 + 8 + 9 + 16 = 108
    // Таким образом, дружба в два раза сильнее любви :-)
    // Ваша задача — написать функцию, которая вычисляет значение слова на основе суммы позиций букв алфавита.
    //     Входные данные всегда будут состоять только из строчных букв и никогда не будут пустыми.
    function wordsToMarks(string) {
        const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
        const arrString = string.split('')
        let result = 0
        for (let str of arrString) {
            let index = alph.indexOf(str);
            if (index !== -1) {
                result += index + 1;
            }

        }
        return result
    }
