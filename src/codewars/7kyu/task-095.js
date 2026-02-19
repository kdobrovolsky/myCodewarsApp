// Source: src/codewars.js
// Task: 95
// Inferred kyu: 7kyu

    //Задача 95
    // Задача
    // Дана строка str. Необходимо развернуть её и удалить все не-алфавитные символы.
    //     Пример
    // Для str = "krishan" результат должен быть "nahsirk".
    //     Для str = "ultr53o?n" результат должен быть "nortlu".
    //     Ввод/Вывод
    //     [input] строка str
    // Строка, состоящая из символов в нижнем регистре латинского алфавита, цифр и других символов.
    //     [output] строка

    function reverseLetter(str) {
        return str.split('').filter(t => /[a-zA-Z]/.test(t)).reverse().join('')
    }
