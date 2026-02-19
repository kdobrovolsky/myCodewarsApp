// Source: src/codewars.js
// Task: 129
// Inferred kyu: 7kyu

    //Задача 129
    // Дана строка со словами, разделёнными пробелами. Верните самое длинное слово.
    //     Если есть несколько слов максимальной длины, верните самое правое из них.
    //     Примеры:
    // "red white blue" => "white"
    // "red blue gold" => "gold"

    function longestWords(stringOfWords) {
        const arrStr = stringOfWords.split(' ');
        let lonesy = ''
        for (let str of arrStr) {
            if (str.length >= lonesy.length) {
                lonesy = str
            }

        }
        return lonesy
    }
