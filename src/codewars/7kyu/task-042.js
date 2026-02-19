// Source: src/codewars.js
// Task: 42
// Inferred kyu: 7kyu

    //Задача 42
    // Напишите функцию, которая принимает число в качестве входного параметра и возвращает сумму абсолютных значений
    // каждой десятичной цифры этого числа.
    //     Например: (Входные данные --> Результат)
    // text
    // 10 --> 1
    // 99 --> 18
    // -32 --> 5

    function sumDigits(number) {

        const arrNumber = Math.abs(number).toString().split('');
        let sum = 0;
        for (let i = 0; i < arrNumber.length; i++) {
            sum += Number(arrNumber[i]);
        }

        return sum;
    }
