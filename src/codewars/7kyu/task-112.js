// Source: src/codewars.js
// Task: 112
// Inferred kyu: 7kyu

    //Задача 112
    // Возьмите 2 строки s1 и s2, содержащие только буквы от a до z.
    //     Верните новую отсортированную строку (в алфавитном порядке по возрастанию),
    // максимально возможной длины, содержащую уникальные буквы — каждая буква должна встречаться только один раз —
    // которые присутствуют либо в s1, либо в s2.

    function longest(s1, s2) {
        const arrStr1 = s1.split('')
        const arrStr2 = s2.split('')
        const result = new Set(arrStr1.concat(arrStr2).sort())
        return [...result].join(' ')
    }
