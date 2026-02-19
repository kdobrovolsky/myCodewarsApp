// Source: src/codewars.js
// Task: 32
// Inferred kyu: 8kyu

    //Задача 32
    // Проверяет, содержит ли строка одинаковое количество символов «x» и «o».
    // Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любые символы.
    // Примеры ввода/вывода:
    // XO("ooxx") => true
    // XO("xooxx") => false
    // XO("ooxXm") => true
    // XO("zpzpzpp") => true // если нет ни символов «x», ни «o», следует вернуть true
    // XO("zzoo") => false

    function XO(str) {
        const strArr = str.toLowerCase().split('')
        let countO = 0
        let countX = 0
        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] === 'o') {
                countO++
            } else if (strArr[i] === 'x') {
                countX++
            }
        }
        return countO === countX
    }

    //Задача найти факториал !5, решение с помощью рекурсии
    const foo = (n) => {

        if (n === 1) return 1
        return foo(n - 1) * n
    }
