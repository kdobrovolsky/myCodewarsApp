// Source: src/codewars.js
// Task: 30
// Inferred kyu: 7kyu

    // Задача 30
    // В математике факториал неотрицательного целого числа n, обозначаемый n!, представляет собой произведение всех положительных целых чисел, меньших или равных n. Например: 5! = 5 * 4 * 3 * 2 * 1 = 120. По соглашению значение 0! равно 1.
    // Напишите функцию для вычисления факториала для заданного входного значения. Если входное значение меньше 0 или больше 12, выбросьте исключение типа ArgumentOutOfRangeException (C#)
    // или IllegalArgumentException (Java) или RangeException (PHP) или throw a RangeError (JavaScript) или ValueError (Python) или return -1 (C).
    //     Более подробную информацию о факториале можно найти здесь.

    function factorial(n) {
        if (n > 12 || n < 0) {
            throw new RangeError("Number must be between 0 and 12");
        }

        let result = 1
        for (let i = 1; i <= n; i++) {
            result *= i
        }
        return result
    }
