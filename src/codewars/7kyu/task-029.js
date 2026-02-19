// Source: src/codewars.js
// Task: 29
// Inferred kyu: 7kyu

    // Задача 29
    // Создайте функцию с именем divisors/Divisors, которая принимает целое число n > 1 и возвращает массив со всеми делителями этого числа (кроме 1 и самого числа),
    // от наименьшего к наибольшему. Если число простое, верните строку '(integer) is prime'
    // (null в C#, пустую таблицу в COBOL) (используйте Either String a в Haskell и Result<Vec<u32>, String> в Rust).

    function divisors(integer) {
        const arrNum = []
        for (let i = 2; i < integer; i++) {
            if (integer % i === 0) {
                arrNum.push(i);
            }
        }
        return arrNum.length !== 0 ? arrNum : `${integer} is prime`;
    }
