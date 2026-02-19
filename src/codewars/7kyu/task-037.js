// Source: src/codewars.js
// Task: 37
// Inferred kyu: 7kyu

    //Задача 37
    // Вам дан массив целых чисел нечётной длины, в котором все числа одинаковые, кроме одного единственного числа.
    //Завершите метод, который принимает такой массив и возвращает это единственное отличающееся число.
    //Входной массив всегда будет корректным! (нечётная длина >= 3)

    function stray(numbers) {
        if (numbers[0] !== numbers[1] && numbers[1] !== numbers[2]) {
            return numbers[0]
        }
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] !== numbers[0]) {
                return numbers[i]
            }
        }
    }
