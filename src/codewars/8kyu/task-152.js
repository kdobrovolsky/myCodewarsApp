// Source: src/codewars.js
// Task: 152
// Inferred kyu: 8kyu

    //Задача 152
    // Для этого ката вам придется забыть, как складывать два числа.
    //     Лучше всего это объясняет следующий мем:
    //     Даяне Ривас выполняет сложение во время участия в гватемальском телешоу «Combate» в мае 2016 года.
    //     Проще говоря, наш метод не признаёт принцип переноса разрядов и просто записывает каждую вычисленную цифру :-)
    // Можно считать, что оба целых числа являются положительными.

    function addN(num1, num2) {
        let result = []
        const num1Arr = String(num1).split('')
        const num2Arr = String(num2).split('')

        for (let i = 0; i < num1Arr.length; i++) {
            result.push(+num1Arr[i] + +num2Arr[i])
        }

        return Number(result.join(''))

    }
