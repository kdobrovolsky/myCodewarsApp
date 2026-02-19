// Source: src/codewars.js
// Task: 149
// Inferred kyu: 8kyu

    //Задача 149
    // Дана строка. Необходимо вернуть строку, в которой каждый символ (с учётом регистра) повторяется один раз.
    // Примеры (Ввод -> Вывод):
    // "String" -> "SSttrriinngg"
    // "Hello World" -> "HHeelllloo WWoorrlldd"
    // "1234!_ " -> "11223344!!__ "
    // Удачи!

    function doubleChar(str) {
        return str.split('').map(t => t + t).join('')

    }
