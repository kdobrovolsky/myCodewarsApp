// Source: src/codewars.js
// Task: 130
// Inferred kyu: 8kyu

    //Задача 130
    // Джеку очень нравится число пять: хитрость здесь в том, что нужно умножить каждое число на 5, возведённое в степень, равную количеству цифр в этом числе. Например:
    // 3 --> 15 ( 3 * 5¹)
    // 10 --> 250 ( 10 * 5²)
    // 200 --> 25000 (200 * 5³)
    // 0 --> 0 ( 0 * 5¹)
    // -3 --> -15 ( -3 * 5¹)

    function multiply(number) {
        return number * Math.pow(5, number > 0 ? number.toString().split('').length : number.toString().split('').length - 1)
    }
