// Source: src/codewars.js
// Task: 135
// Inferred kyu: 8kyu

    //Задача 135
    // Данная строка произвольной длины, содержащая любые символы ASCII. Напишите функцию для определения, содержит ли строка целое слово "English".
    //     Порядок символов важен — строка "abcEnglishdef" считается корректной, а "abcnEglishsef" — нет.
    //     Регистр букв не имеет значения — "eNglisH" также считается корректным.
    //     Верните результат в виде логических значений: true, если строка содержит "English", и false, если нет.

    function spEng(sentence) {
        return sentence.toLowerCase().includes('english')
    }
